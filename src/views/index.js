import React, { useState } from 'react'
import AddModal from '../components/Addmodal'
import Text from '../components/Text'

const Login = () => {
    const [isOpen,setIsOpen]=useState(false)
    const [value, setValue] = useState()
    const toggle=()=>{
        setIsOpen(!isOpen)
    }

   const loginModal=(
    <>
    <Text
    label={"Name"}
    placeHolder={"Enter your name"}
    name="name"
    />
    </>
   ) 
  return (
    <div>
        <button onClick={toggle}>Add</button>
        <AddModal
         isOpen={isOpen}
         toggle={toggle}
         toggleModalClose={toggle}
         modalBody={loginModal}
         onSubmit={(e)=>console.log(e)}
        />
    </div>
  )
}

export default Login