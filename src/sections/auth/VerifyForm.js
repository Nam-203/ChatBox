import React from 'react'
import FormProvider from '../../components/HookForm/FormProvider'
import { Alert, Button, Link, Stack } from '@mui/material'
import RHFTextField from '../../components/HookForm/RHFTextField'
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link as RouterLink } from "react-router-dom";
import RHFCodes from '../../components/HookForm/RHFCodes';
import { useDispatch, useSelector } from 'react-redux';
import { VerifyEmail } from '../../redux/slices/auth';


const VerifyForm = () => {
    const dispatch = useDispatch();
const {email} = useSelector((state)=>state.auth)

  const VerifySchema = Yup.object().shape({
    code1: Yup.string().required("Code is required"),
    code2: Yup.string().required("Code is required"),
    code3: Yup.string().required("Code is required"),
    code4: Yup.string().required("Code is required"),
    code5: Yup.string().required("Code is required"),
    code6: Yup.string().required("Code is required"),

     
  });

  const defaultValues = {
    code1:"",
    code2:"",
    code3:"",
    code4:"",
    code5:"",
    code6:"",

  
  };
  const methods = useForm({
    mode:"onchange",
    resolver: yupResolver(VerifySchema),
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
        dispatch(VerifyEmail({
            email,
            otp:`${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`
        }))
     console.log(data);
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
<RHFCodes keyName='code' inputs={["code1", "code2", "code3", "code4", "code5", "code6"]}/>
    

      
    </Stack>

    <Stack alignItems="flex-end" sx={{ my: 2 }}>
      
    </Stack>
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
    >Verify</Button>
    
  </FormProvider>
  )
}

export default VerifyForm