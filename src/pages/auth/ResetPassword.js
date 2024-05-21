import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ResetPasswordForm from "../../sections/auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mt: 5, position: "relative" }}>
      <Typography variant="h3">
          ForGot Your Password ?
        </Typography>
        <Typography sx={{color:"text.primary",mb:5}}>
          {" "}
          Please enter address assocciated with your account and We will email
          you a link reset your password
        </Typography>
        {/*Resetpass form*/}
        <ResetPasswordForm/>
      <Link component={RouterLink} to={"/auth/login"} variant="subtitle2" sx={{ mt:3, mx :"auto" ,alignItems:"center", display:"inline-flex"}}>
        <CaretLeft/>
        Return Sign in
      </Link>
      </Stack>
    </>
  );
};

export default ResetPassword;
