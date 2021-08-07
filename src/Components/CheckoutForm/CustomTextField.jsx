import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        // as={TextField}
        // defaultValue="stripe"
        // name={name}
        // control={control}
        // label={label}
        // fullWidth
        // required={required}
        // error={isError}
      
        // render={({ field }) => (
        //     <TextField
        //             fullWidth
        //             label={label}
        //             required
        //     />
        // )}

        render={({ field }) => (
            <TextField
                as={TextField}
                defaultValue=""
                name={name}
                control={control}
                label={label}
                fullWidth
                required={required}
                error={isError}
            />
        )}


        // render={({ field }) => (
        //   <input
        //     onChange={(e) => field.onChange(transform.output(e))}
        //     value={transform.input(field.value)}
        //   />
        // )}


        // render={({ field }) => (
        //       <Select {...field}>
        //         <MenuItem value={10}>Ten</MenuItem>
        //         <MenuItem value={20}>Twenty</MenuItem>
        //       </Select>
        //     )}
        //   />


      />
    </Grid>
  );
}

export default FormInput;
