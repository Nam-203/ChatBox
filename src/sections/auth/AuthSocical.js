import { Divider, IconButton, Stack } from "@mui/material";
import { FacebookLogo, GithubLogo, GitlabLogo, GoogleLogo, TwitterLogo } from "phosphor-react";
import React from "react";

const AuthSocical = () => {
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disable",
          "&::befor,:: after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        {" "}
        Or
      </Divider>
      <Stack direction={"row"} justifyContent={"center"} spacing={2}>
<IconButton>
    <GoogleLogo color="#DF3E30"/>
</IconButton>
<IconButton>
    <FacebookLogo color="#0091ea"/>
</IconButton>
<IconButton>
    <GitlabLogo color="#212121"/>
</IconButton>
<IconButton>
    <TwitterLogo color="#0277bd"/>
</IconButton>

      </Stack>
    </div>
  );
};

export default AuthSocical;
