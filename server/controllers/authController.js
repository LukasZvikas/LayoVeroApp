const User = require("../models/authSchema");
const JWT = require("jwt-simple");
const jsonToken = require("jsonwebtoken");
const keys = require("../config/dev");
const sgMail = require("@sendgrid/mail");
const crypto = require("crypto");
const passport = require("passport");
const confirmTemplate = require("../services/confirmEmailTemplate");
sgMail.setApiKey(keys.SENDGRID_KEY);

function userToken(user) {
  const timestamp = new Date().getTime();
  return JWT.encode({ id: user._id, iat: timestamp }, keys.JWT_SECRET);
}

exports.signup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  await User.findOne({ username: email }, async (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      res.send({ error: "This email is in use" });
    }

    const id = crypto.randomBytes(16).toString("hex");

    const newUser = User({
      _id: id,
      username: email,
      password: password
    });

    await newUser.save(err => {
      if (err) {
        return next(err);
      }

      const emailJWT = jsonToken.sign({ id: newUser._id }, keys.EMAIL_SECRET, {
        expiresIn: "1d"
      });

      const url = `http://localhost:5000/confirmation/${emailJWT}`;

      const msg = {
        to: email,
        from: "lzvikas1@gmail.com",
        subject: "Confirm Your Email",
        text: "Confirm password",
        html: confirmTemplate(url)
      };
      sgMail.send(msg);
      res.json({ token: userToken(newUser) });
    });
  });
};

exports.signin = (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({ error: info.error });
    }
    await User.findById({ _id: user._id }, (err, user) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.status(422).send({ error: "User was not found" });
      }

      if (!user.confirmed) {
        return res.status(401).send({ error: "Please confirm your account" });
      }

      res.json({ token: userToken(user) });
    });
  })(req, res, next);
};

exports.googleToken = async (req, res, next) => {
  const token = userToken(req.user);
  console.log("TOKEN", req.user);
  res.json({ token: userToken(req.user) });
};
