import React from 'react'
import {  Label, Input } from 'reactstrap'

const Text = (props) => {
    const {label,name,placeholder, textInput,...rest} = props
   
  return ( 
    <div>
        <Label>{label}</Label>
        <Input type="text" id={name} name={name} {...rest} placeholder={placeholder} onChange={textInput}/>
    </div>
  )
}

export default Text