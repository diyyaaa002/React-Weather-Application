import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function RegistrationForm() {
    const [Data,SetData]=React.useState({
        Email:"",
        Password:""
    })

    const HandleChange=(e)=>{
        console.log("Data",e.target.name,e.target.value)
        SetData({...Data,[e.target.name]:e.target.value})
    }

    let navigate=useNavigate()

    const HandleRegister=()=>{
      if (!Data.Email || !Data.Password) {
            alert("All fields are required");
            return;
        }
        if(Data.Password.length<8)
        {
          alert("Password length is less than 8 characters")
          return
        }
axios.post('http://localhost:7000/Register/PostdbRegForm',Data)
          .then((res) => {
        console.log("Post", res.data);
        navigate('/LoginForm')
        
      })
      .catch((err) => {
        console.log("Error", err);
        alert('Registration Faiiled')
      })
    }
  return (
    <div><center>
        <h1>REGISTRATION FORM</h1><br/><br/>
        <label>Email</label>
        <input
        name='Email'
        type='email'
        value={Data.Email}
        onChange={HandleChange}/><br/><br/>
        <label>Password</label>
        <input
        name='Password'
        type='password'
        value={Data.Password}
        onChange={HandleChange}/><br/><br/>
       
        <button
        className='btn btn-info'
        onClick={()=>{HandleRegister()}}>Register</button>
        </center>
    </div>
  )
}

export default RegistrationForm