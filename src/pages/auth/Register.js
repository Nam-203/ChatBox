import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "../../sections/auth/RegisterForm";

const Register = () => {
  return (
    <Stack spacing={2} sx={{ mt: 5, position: "relative" }}>
      <Typography variant="h4"> Get Started With Chatt</Typography>
      <Stack direction={"row"} spacing={0.5}>
        <Typography>Already have an account</Typography>
        <Link component={RouterLink} to={"/auth/Login"} variant="subtitle2">
          Sign in
        </Link>
        {/*register*/}
        
      </Stack>
      <RegisterForm/>
      <Typography
        component={"div"}
        sx={{
          color: "text.secondary",
          mt: 3,
          typography: "caption",
          textAlign: "center",
        }}
      >
        {"By signning up, I agree to"}
        <Link
          underline="always"
          sx={{ color: "text.primary" }}
          component={RouterLink}
          to
        >
          Term of service
        </Link>
        {"  and  "}
        <Link
          underline="always"
          sx={{ color: "text.primary" }}
          component={RouterLink}
          to
        >
          Privacy Policy
        </Link>
      </Typography>
    </Stack>
  );
};

export default Register;
