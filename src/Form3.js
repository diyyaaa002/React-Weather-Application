import React from 'react'
import './Form.css'
function Form3()
{
    const [Data, SetData]=React.useState({Hobby:[]});
    const handleClick=(e)=>
    {
        
        if(e.target.type=='checkbox')
        {
          let arr=Data.Hobby
          if(arr.includes(e.target.value))
            {
                arr.splice(arr.indexOf(e.target.value),1)
            }
            else{
    arr.push(e.target.value)
            }
          
            SetData({...Data,Hobby:arr})
          }
            else
            {
              console.log('Event',e.target.name,e.target.value)
              SetData({...Data,[e.target.name]:e.target.value})
              localStorage.setItem('UserItem',JSON.stringify(Data))
            }
            
        
    }
    return(
<div id='myid'>

<div class="main">
   <h1 class="heading">Registration Form</h1>
<div class="form-floating mb-3">
   
   <input type="email" class="form-control" placeholder="name@example.com" id="FullName" name='Name' onChange={(e)=>{handleClick(e)}} />
   <label for="floatingInput">Full Name</label>
 </div>

 <div class="form-floating mb-3">
   <input type="email" class="form-control" placeholder="name@example.com" id="EmailAddress" name='Email' onChange={(e)=>{handleClick(e)}} ></input>
   <label for="floatingInput">Email address</label>
 </div>

 <div class="form-floating">
   <input type="password" class="form-control" placeholder="Password" id="password" name='Password' onChange={(e)=>{handleClick(e)}}></input>
   <label for="floatingPassword">Password</label>
 </div>

 <br></br>

 <div class="form-floating">
   <select class="form-select" aria-label="Floating label select example" id="Gender" name='Gender' onChange={(e)=>{handleClick(e)}}>
    <option selected>Male</option>
    <option value="Male" >Male</option>
    <option value="Female">Female</option>
  
  </select>
  <label for="floatingSelect">Gender</label>
</div>
<br></br>
<div class="form-floating mb-3">
  <input type="email" class="form-control" placeholder="name@example.com" id="Address" name='Address' onChange={(e)=>{handleClick(e)}}></input>
  <label for="floatingInput"> Complete Address</label>
</div>
<br></br>
<div class="form-floating mb-3">
  <input type="email" class="form-control" placeholder="name@example.com" id="Age" name='Age' onChange={(e)=>{handleClick(e)}}></input>
  <label for="floatingInput">Age</label>
</div>
<br></br>
<div class="form-floating mb-3">
  <input type="date" class="form-control" placeholder="birthday" id="DOB" name='Date Of Birth' onChange={(e)=>{handleClick(e)}}></input>
  <label for="floatingInput">D.O.B</label>

</div>
<br></br>
Course<br></br>
<label>CSE</label>
<input type='radio' name='course' value='CSE' onChange={(e)=>{handleClick(e)}}></input>
<label>IT</label>
<input type='radio' name='course' value='IT' onChange={(e)=>{handleClick(e)}} ></input>
<br></br><br></br>
Hobby<br></br>
<label>Drawing</label>
<input type='checkbox' name='Hobby' value='Drawing' onChange={(e)=>{handleClick(e)}}></input>
<label>Dancing</label>
<input type='checkbox' name='Hobby' value='Dancing' onChange={(e)=>{handleClick(e)}}></input>
<label>Singing</label>
<input type='checkbox' name='Hobby' value='Singing' onChange={(e)=>{handleClick(e)}}></input>

<br></br><br></br>
<div id='button'>
<div class="col-12">
  <button class="btn btn-primary" type="submit" id="Submit" onClick={(e)=>{
    console.log(Data)
    SetData({})
    }} >Submit form</button>
  <button onClick={(e)=>{
          let userItem=  localStorage.getItem('UserItem')
          console.log(JSON.parse(userItem))
          }}>Get Item</button>
          <button onClick={(e)=>{
            localStorage.removeItem('UserItem')
            
            }}>Remove Item</button>
            <button onClick={()=>
              {
                localStorage.clear()
              }
            }>Clear Items</button>
  </div>
  <div id='side'>
  </div>
  
</div>
</div>
</div>




    )
}
export default Form3;