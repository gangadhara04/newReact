import React from 'react'
import ReactSelect from "react-select"
import { Label } from 'reactstrap'
const Select = (props) => {
  const { options,label,onChange,required } = props
  return (
    <div>
      <Label>{label}</Label>
      <ReactSelect
        options={options}
        onChange={onChange}
        required
      />
    </div>
  )
}

export default Select