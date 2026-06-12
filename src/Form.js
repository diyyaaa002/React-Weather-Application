import React from 'react'
import './Form.css'

function Form(props)
{

  const[Name,Setname]=React.useState('')
  const[Email,SetEmail]=React.useState('')
  const[Gender,SetGender]=React.useState('')
  const[Address,SetAddress]=React.useState('')
  const[Age,SetAge]=React.useState('')
  const[DOB,SetDOB]=React.useState('')
  const[Course,SetCourse]=React.useState('')
  const[Hobby,SetHobby]=React.useState([])
  const handlechange=(e)=>
    {
      let arr=Hobby
        if(arr.includes(e.target.value))
        {
            arr.splice(arr.indexOf(e.target.value),1)
        }
        else{
arr.push(e.target.value)
        }
        SetHobby(arr)
    }
  
    return(

        <div id='myid'>
<h1>FORM</h1>
          <div class="main">
             <h1 class="heading">Registration Form</h1>
         <div class="form-floating mb-3">
             
             <input type="email" class="form-control" placeholder="name@example.com" id="FullName" name='' onChange={(e)=>{Setname(e.target.value)}} ></input>
             <label for="floatingInput">Full Name</label>
           </div>
 
           <div class="form-floating mb-3">
             <input type="email" class="form-control" placeholder="name@example.com" id="EmailAddress" onChange={(e)=>{SetEmail(e.target.value)}} ></input>
             <label for="floatingInput">Email address</label>
           </div>
 
           <div class="form-floating">
             <input type="password" class="form-control" placeholder="Password" id="password"></input>
             <label for="floatingPassword">Password</label>
           </div>
 
           <br></br>
 
           <div class="form-floating">
             <select class="form-select" aria-label="Floating label select example" id="Gender" onChange={(e)=>{SetGender(e.target.value)}}>
              <option selected>Male</option>
              <option value="Male" >Male</option>
              <option value="Female">Female</option>
            
            </select>
            <label for="floatingSelect">Gender</label>
          </div>
          <br></br>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com" id="Address" onChange={(e)=>{SetAddress(e.target.value)}}></input>
            <label for="floatingInput"> Complete Address</label>
          </div>
          <br></br>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com" id="Age" onChange={(e)=>{SetAge(e.target.value)}}></input>
            <label for="floatingInput">Age</label>
          </div>
          <br></br>
          <div class="form-floating mb-3">
            <input type="date" class="form-control" placeholder="birthday" id="DOB" onChange={(e)=>{SetDOB(e.target.value)}}></input>
            <label for="floatingInput">D.O.B</label>
          
          </div>
          <br></br>
          Course<br></br>
<label>CSE</label>
<input type='radio' name='course' value='CSE' onChange={(e)=>{SetCourse(e.target.value)}}></input>
<label>IT</label>
<input type='radio' name='course' value='IT' onChange={(e)=>{SetCourse(e.target.value)}}></input>
<br></br><br></br>
Hobby<br></br>
<label>Drawing</label>
<input type='checkbox' name='course' value='Drawing' onChange={(e)=>{handlechange(e)}}></input>
<label>Dancing</label>
<input type='checkbox' name='course' value='Dancing' onChange={(e)=>{handlechange(e)}}></input>
<br></br><br></br>
          <div id='button'>
          <div class="col-12">
            {/* <button class="btn btn-primary" type="submit" id="Submit" onClick={(e)=>{console.log(`Form submitted `+Name+ ';  Email Id '+Email+';  who is a '+ Gender +';  who lives in '+ Address +';  whose age is '+Age+';  whose DOB is '+DOB+';  whose course is '+Course+'; whose hobby is '+Hobby)}}>Submit form</button> */}
            <button onClick={(e)=>{
              localStorage.setItem('Name',Name)
              localStorage.setItem('Email',Email)
              localStorage.setItem('Address',Address)
            }}>Click me</button>
            <button onClick={(e)=>{
             let ans= localStorage.getItem('Name')
             let ans1=localStorage.getItem('Email')
             console.log(ans)
             console.log(ans1)
            }}>Get Item</button>
            <button onClick={(e)=>{
            localStorage.removeItem('Name')
            localStorage.removeItem('Email')
            }}>Remove Item</button>
            <button onClick={()=>
              {
                localStorage.clear()
              }
            }>
            Clear
            </button><br></br><br></br>
            <button class="btn btn-info" onClick={()=>{props.CheckLogin()}}>Login Here</button>
            </div>
            <div id='side'>
            </div>
            
          </div>
          </div>
          </div>
    

    
        )
    
}
export default Form;