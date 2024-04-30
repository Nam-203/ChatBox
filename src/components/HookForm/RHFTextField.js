import { PropTypes } from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import React from "react";
RHFTextField.ropTypes ={
    name:PropTypes.string,
    label :PropTypes.string,
    helperText :PropTypes.string
}
export default function RHFTextField({ name, helperText, ...other }) {
  const { contrlol } = useFormContext();
  return (
    <Controller
      name={name}
      control={contrlol}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          error={!!error}
          helperText={error ? error.message : helperText}
          {...other}
        />
      )}
    />
  );
}
