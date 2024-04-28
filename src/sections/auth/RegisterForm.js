import React, { useState } from "react";
import * as Yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormProvider from "./../../components/HookForm/FormProvider";
import { Alert, Button, IconButton, InputAdornment, Stack } from "@mui/material";
import RHFTextField from "./../../components/HookForm/RHFTextField";
import { Eye, EyeSlash } from "phosphor-react";
import AuthSocical from "./AuthSocical";
const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("first name is required"),
    lastName: Yup.string().required("Last name is required"),

    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "demo@dev.com",
    password: "demo1234",
  };
  const methods = useForm({
    resolver: yupResolver(RegisterForm),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <Stack direction={{ sx: "column", sm: "row" }} spacing={2}>
          <RHFTextField name="firstName" label="First Name" />
          <RHFTextField name="lastName" label="Last Name" />
        </Stack>
        <RHFTextField name="Email" label="Email" />
        <RHFTextField
          name="Password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="container"
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >Register</Button>
      <AuthSocical/>
      </Stack>
      
    </FormProvider>
  );
};

export default RegisterForm;
