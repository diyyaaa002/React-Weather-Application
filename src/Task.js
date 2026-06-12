import React from 'react'
import './Task.css'
function Task()
{
    const[Data,SetData]=React.useState({})
    const HandleClick=(e)=>{
      SetData({...Data,[e.target.name]:e.target.value})
        
    }
    return(
        <div id='myid'>
           <div class="main">
             <h1 class="heading">Business Card Generation Form</h1>
         <div class="form-floating mb-3">
             
             <input type="email" class="form-control" placeholder="name@example.com" id="FullName" name='Name' onChange={(e)=>{HandleClick(e)}} ></input>
             <label for="floatingInput">Full Name</label>
           </div>
 
           <div class="form-floating mb-3">
             <input type="email" class="form-control" placeholder="name@example.com" id="EmailAddress" name='Company ' onChange={(e)=>{HandleClick(e)}} ></input>
             <label for="floatingInput">Company's Name</label>
           </div>
 
           {/* <div class="form-floating">
             <input type="password" class="form-control" placeholder="Password" id="password"></input>
             <label for="floatingPassword">Password</label>
           </div> */}
 
           <br></br>
 
           {/* <div class="form-floating">
             <select class="form-select" aria-label="Floating label select example" id="Gender" onChange={(e)=>{SetGender(e.target.value)}}>
              <option selected>Male</option>
              <option value="Male" >Male</option>
              <option value="Female">Female</option>
            
            </select>
            <label for="floatingSelect">Gender</label>
          </div> */}
          {/* <br></br> */}
          <div class="form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com" id="Address"  name='Address 'onChange={(e)=>{HandleClick(e)}} ></input>
            <label for="floatingInput"> Designation</label>
          </div>
          <br></br>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com" id="Age" name='Age' onChange={(e)=>{HandleClick(e)}}></input>
            <label for="floatingInput">Conatact Number</label>
          </div>
          <br></br>
          <div class="form-floating mb-3">
            <input type="date" class="form-control" placeholder="birthday" id="DOB" name='Established ' onChange={(e)=>{HandleClick(e)}}></input>
            <label for="floatingInput">Established Since</label>
            <br></br>
            {/* <button onClick={(e)=>{
    console.log(Data)
    SetData({})
    
    }}>Click here to generate card</button> */}
    <div id='card'>
        {Data.Name}
        {Data.Company Name}
        {Data.Address}
        {Data.Age}
      
        {Data.Age}

    </div>
          
          </div>
        </div>
        </div>

    )
}
export default Task;