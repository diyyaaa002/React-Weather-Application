import React, { useState } from "react";
import "./Skills_Student_Register_Form.css";
import { useNavigate } from "react-router-dom";

function Skills_Student_Register_Form() {
  const [Data, setData] = useState({
    Enrollment_Number: "",
    Name: "",
    Semester: "",
    course: "",
    Password:""
  });
  const navigate=useNavigate()
  const HandleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(Data);
  };

  return (
    <div className="student-page">
      <div className="student-overlay"></div>

      <div className="student-left">
        <div className="student-left-content">
          <h1>STUDENT PORTAL</h1>
          <p>
            Build skills, register for courses, and manage your academic
            journey through a clean and modern student dashboard.
          </p>

          <div className="student-login-box">
            <span>Have an account already?</span>
            <button className="student-submit-btn" onClick={()=>navigate("/Student/Login")}>Log In</button>
          </div>
        </div>
      </div>

      <div className="student-right">
        <div className="student-form-card">
          <h2>Registration Form</h2>

          <form onSubmit={HandleSubmit}>
            <div className="student-form-group">
              <label>Enrollment Number</label>
              <input
                type="text"
                name="Enrollment_Number"
                value={Data.Enrollment_Number}
                placeholder="Enter enrollment number"
                onChange={HandleChange}
              />
            </div>

             <div className="student-form-group">
              <label>Password</label>
              <input
                type="password"
                name="Password"
                value={Data.Password}
                placeholder="Enter Password"
                onChange={HandleChange}
              />
            </div>

            <div className="student-form-group">
              <label>Name</label>
              <input
                type="text"
                name="Name"
                value={Data.Name}
                placeholder="Enter full name"
                onChange={HandleChange}
              />
            </div>

            <div className="student-form-group">
              <label>Semester</label>
              <input
                type="text"
                name="Semester"
                value={Data.Semester}
                placeholder="Enter semester"
                onChange={HandleChange}
              />
            </div>

            <div className="student-form-group">
              <label>Course</label>
              <input
                type="text"
                name="course"
                value={Data.course}
                placeholder="Enter course"
                onChange={HandleChange}
              />
            </div>

            <button type="submit" className="student-submit-btn" onClick={()=>navigate("/Student/Login")}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Skills_Student_Register_Form;