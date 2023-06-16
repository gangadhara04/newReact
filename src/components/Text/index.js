import React from 'react'
import { Label, Input } from 'reactstrap'

const Text = (props) => {
  const { label, name, placeholder, required, onChange, ...rest } = props
    
  return (
    <div>
      <Label>{label}</Label>
      <Input type="text" id={name} name={name} {...rest} placeholder={placeholder} onChange={onChange} required={required} />
      <span></span>
    </div>
  )
}

export default Text