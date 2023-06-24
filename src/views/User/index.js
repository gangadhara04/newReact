import React, { useState } from 'react'
import AddModal from '../../components/Addmodal'
import Text from '../../components/Text'
import { Button } from 'reactstrap'
import Select from '../../components/Select/index';
import userService from '../../services/userService';
const Login = () => {
  const [isOpen, setIsOpen] = useState(false)
  const[name,setName]=useState("")
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const educationDetail=[
    {label:"BE",value:"BE"},
    {label:"Bcom",value:"Bcom"}

  ]
const handleInput=(e)=>{
  const value=e.target.value
   setName(value)
}
  const loginModal = (
    <>
      <Text
        label={"Name"}
        placeHolder={"Enter your name"}
        name="name"
        onChange={handleInput}
        required={true}
      />
      <Select
      label={"Education"}
      options={educationDetail}
      />
    </>
  )
  const handleSubmit=(value)=>{
    const data=new FormData()
    data.append("name",value?.name)
    data.append("education",value?.value)
    userService.create(data)
}
const accountEntryFooter = (
  <div className="container-fluid">
    <div className="col-sm-12 text-center">
      <Button type="submit" label="" className="ml-3 h6-5-important">
        Add

      </Button>
    </div>
  </div>
);

  
  return (
    <div>
      <button onClick={toggle}>Add</button>
      <AddModal
        isOpen={isOpen}
        // enableReinitialize
        initialValues={{name:name?name:""}}
        toggle={toggle}
        toggleModalClose={toggle}
        modalBody={loginModal}
        madalFotter={accountEntryFooter}
        onSubmit={(name) => {
          handleSubmit(name);
        }}

      />
    </div>
  )
}

export default Login