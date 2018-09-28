const mongoose = require("mongoose");
const authController = require("../controllers/authController");
const emailController = require("../controllers/emailController");
const passport = require("passport");
const JWT = require("jwt-simple");
const keys = require("../config/dev");
const cors = require("cors");

const requireSignin = passport.authenticate("local", {
  session: false,
  failWithError: true
});
const requireAuth = passport.authenticate("jwt", { session: false });
const googleAuth = passport.authenticate("google", {
  session: false,
  scope: ["profile", "email"]
});

module.exports = app => {
  app.get("/user", requireAuth, (req, res) => {
    res.send({ hey: "there" });
  });

  app.get("/auth/google", googleAuth);

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      session: false,
      successRedirect: "/user",
      failureRedirect: "/signup"
    }),
    authController.googleToken
  );

  app.get("/hello", (req, res) => {
    res.send({ hello: "there" });
  });

  app.post("/signup", authController.signup);

  app.post(
    "/signin",
    (req, res, next) => {
      passport.authenticate("local", (err, user, info) => {
        if (err) {
          return next(err);
        }
        if (!user) {
          return res.json({ message: info.error });
        }
        res.json(user);
      })(req, res, next);
    },
    authController.signin
  );

  app.get("/confirmation/:token", emailController.confirmEmail);

  app.post("/forgot", emailController.forgot);

  app.get("/reset/:token", emailController.forgotTokenGet);

  app.post("/reset/:token", emailController.forgotTokenPost);
};
