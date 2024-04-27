import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import AuthSocical from "../../sections/auth/AuthSocical";
import LoginForm from "../../sections/auth/LoginForm";

const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mt: 5, position: "relative" }}>
        <Typography variant="h4"> Login to App</Typography>
        <Stack spacing={0.5} direction={"row"}>
          <Typography variant="body2">New user</Typography>
          <Link to="auth/register" component={RouterLink} variant="subtitle2">
            CreateAccount
          </Link>
        </Stack>
        {/*login form */}
        <LoginForm/>
        {/* auth social */}
        <AuthSocical/>
      </Stack>
    </>
  );
};

export default Login;
