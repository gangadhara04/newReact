import React from 'react'
import { Label, Input, FormGroup, FormFeedback } from 'reactstrap'
import { useFormikContext } from 'formik';

const Text = (props) => {
  const { label, name, placeholder, required, ...rest } = props
  console.log("required:", required)
  const { touched, errors } = useFormikContext();

  const showError = touched[name] && errors[name];
  console.log("showError:", showError)
  const requiredMessage = `${label} is required`;

  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        type="text"
        id={name}
        name={name}
        {...rest}
        placeholder={placeholder}
        invalid={showError}
      />
      {showError && <FormFeedback>{errors[name]}</FormFeedback>}
      {required && !showError && <FormFeedback>{requiredMessage}</FormFeedback>}
    </FormGroup>
  )
}

export default Text
