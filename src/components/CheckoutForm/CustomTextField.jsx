import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';


const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        defaultValue=''
        control={control}
        fullWidth
        name={name}
        label={label}
        required={true}
      />
    </Grid>
  );
};

export default FormInput;