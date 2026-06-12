import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function LoginForm() {
    let navigate=useNavigate()
  
    const [LoginData,SetLoginData]=React.useState({
            Email:"",
            Password:""
        })
        const HandleChange=(e)=>{
            console.log("Data",e.target.name,e.target.value)
            SetLoginData({...LoginData,[e.target.name]:e.target.value})
        }
        const HandleLogin=()=>{

          if (!LoginData.Email || !LoginData.Password) {
            alert("All fields are required");
            return;
        }
        if(LoginData.Password.length<8)
        {
          alert("Password length is less than 8 characters")
          return
        }
        console.log(LoginData)
axios.post('http://localhost:7000/Login/PostdbLogForm',LoginData)
.then((res) => {
      //  console.log("Post", res.data);
        console.log("Token",res)
        if(res && res.data && res.data.token){
   localStorage.setItem('Token',res.data.token)
        navigate('/Dashboard')
        }
        else{
          alert('Error in login')
        }
     
        
      })
      .catch((err) => {
        console.log("Error", err);
      });
        }
       
  return (
    <div>
        <center>
            <h1>Login Form</h1>
             <label>Email</label>
        <input
        name='Email'
        value={LoginData.Email}
        onChange={HandleChange}/><br/><br/>
        <label>Password</label>
        <input
        name='Password'
        value={LoginData.Password}
        onChange={HandleChange}/><br/><br/>
         <button
        className='btn btn-success'
        onClick={()=>{
            HandleLogin()
        }}>Submit</button>
        </center>
    </div>
  )
}

export default LoginForm