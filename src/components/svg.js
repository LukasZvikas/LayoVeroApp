import React from "react";
import Svg, { Defs, Path, Text } from "react-native-svg";

export const Facebook = () => {
  return (
    <Svg height="24" width="24" viewBox="0 0 24 24">
        <Path
          fill="#fff"
          d={
            "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
          }
        />
    </Svg>
  );
};


export const Google = () => {
  return (
    <Svg height="24" width="24" viewBox="0 0 24 30" >
        <Path
          fill="#fff"
          d={
           "M12 12.281h11.328c0.109 0.609 0.187 1.203 0.187 2 0 6.844-4.594 11.719-11.516 11.719-6.641 0-12-5.359-12-12s5.359-12 12-12c3.234 0 5.953 1.188 8.047 3.141l-3.266 3.141c-0.891-0.859-2.453-1.859-4.781-1.859-4.094 0-7.438 3.391-7.438 7.578s3.344 7.578 7.438 7.578c4.75 0 6.531-3.406 6.813-5.172h-6.813v-4.125z"
          }
        />
    </Svg>
  );
};