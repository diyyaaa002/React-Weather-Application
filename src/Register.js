import React from 'react'

function Register(props) {
  return (
    <div>
        
        <center>
        <h1>REGISTER FORM</h1>
        <label>Name</label>
        <input/><br></br><br></br>
        <label>Password</label>
        <input/><br></br><br></br>
        <button class="btn btn-info" onClick={()=>{props.CheckLogin()}}>Login Here</button>
        </center>
    </div>
  )
}

export default Register