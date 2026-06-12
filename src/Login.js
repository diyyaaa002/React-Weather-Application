import React from "react";
import "./Login.css";
function Login(props) {
  const [Name, Setname] = React.useState("");
  const [email, Setemail] = React.useState("");
  const [Gender, SetGender] = React.useState("");
  const [Address, SetAddress] = React.useState("");
  const [Age, SetAge] = React.useState("");
  const [DOB, SetDOB] = React.useState("");
  const [Hobby, SetHobby] = React.useState([]);
  const handleChange = (e, type) => {
    if (type == "Name") {
      Setname(e.target.value);
    } else if (type == "email") {
      Setemail(e.target.value);
    } else if (type == "Gender") {
      SetGender(e.target.value);
    } else if (type == "Address") {
      SetAddress(e.target.value);
    } else if (type == "Age") {
      SetAge(e.target.value);
    } else if (type == "DOB") {
      SetDOB(e.target.value);
    } else if (type == "Hobby") {
      SetDOB(e.target.value);
      let arr=Hobby
        if(arr.includes(e.target.value))
        {
            arr.splice(arr.indexOf(e.target.value),1)
        }
        else{
arr.push(e.target.value)
        }
        SetHobby(arr)
  };
    }
    
  return (
    <div id="myid">
      <div class="main">
        <h1 class="heading">Login Form</h1>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
            id="FullName"
            onChange={(e) => {
              handleChange(e, "Name");
            }}
          ></input>
          <label for="floatingInput">Full Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
            id="EmailAddress"
            onChange={(e) => {
              handleChange(e, "email");
            }}
          ></input>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            id="password"
          ></input>
          <label for="floatingPassword">Password</label>
        </div>
        <br></br>
        <div class="form-floating">
          <select
            class="form-select"
            aria-label="Floating label select example"
            id="Gender"
            onChange={(e) => {
              handleChange(e, "Gender");
            }}
          >
            <option selected>Male</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label for="floatingSelect">Gender</label>
        </div>
        <br></br>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
            id="Address"
            onChange={(e) => {
              handleChange(e, "Address");
            }}
          ></input>
          <label for="floatingInput"> Complete Address</label>
        </div>
        <br></br>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
            id="Age"
            onChange={(e) => {
              handleChange(e, "Age");
            }}
          ></input>
          <label for="floatingInput">Age</label>
        </div>
        <br></br>
        <div class="form-floating mb-3">
          <input
            type="date"
            class="form-control"
            placeholder="birthday"
            id="DOB"
            onChange={(e) => {
              handleChange(e, "DOB");
            }}
          ></input>
          <label for="floatingInput">D.O.B</label>
        </div>
        <br></br>
        {/* Course<br></br>
        <label>CSE</label>
        <input type="radio" name="course" value="CSE" onChange={(e) => {
            handleChange(e, "Course");
          }}></input>
        <label>IT</label>
        <input type="radio" name="course" value="IT"onChange={(e) => {
            handleChange(e, "Course");
          }}></input>
        <br></br>
        <br></br>
        Hobby<br></br>
        <label>Drawing</label> */}
        <input
          type="checkbox"
          name="course"
          value="Drawing"
          onChange={(e) => {
            handleChange(e, "Hobby");
          }}
        ></input>
        <label>Dancing</label>
        <input
          type="checkbox"
          name="course"
          value="Dancing"
          onChange={(e) => {
            handleChange(e, "Hobby");
          }}
        ></input>
        <br></br>
        <br></br>
        <div id="button">
          <div class="col-12">
            <button
              class="btn btn-primary"
              type="submit"
              id="Submit"
              onClick={(e) => {
                console.log(
                  `Form submitted ` +
                    Name +
                    ";  Email Id " +
                    email +
                    ";  who is a " +
                    Gender +
                    ";  who lives in " +
                    Address +
                    ";  whose age is " +
                    Age +
                    " whose hobby is "+ 
                    Hobby
                );
              }}
            >
              Submit form
            </button><br></br><br></br>
            <button class="btn btn-info" onClick={()=>{props.CheckLogin()}}>Register Here</button>
          </div>
          <div id="side"></div>
        </div>
      </div>
    </div>
  );
}
export default Login;
