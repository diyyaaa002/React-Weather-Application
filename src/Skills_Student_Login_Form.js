import React from "react";
import "./Skills_Student_Login_Form.css";
import { useNavigate } from "react-router-dom";

function Skills_Student_Login_Form() {
  const [Data, setData] = React.useState({
    Enrollment_Number: "",
    Password: "",
  });

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
 const navigate=useNavigate()
  return (
    <div className="student-login-page">
      <div className="student-login-overlay"></div>

      <div className="student-login-left">
        <div className="student-login-form-card">
          <h2>Login Form</h2>

          <form onSubmit={HandleSubmit}>
            <div className="student-login-form-group">
              <label>Enrollment Number</label>
              <input
                type="text"
                name="Enrollment_Number"
                value={Data.Enrollment_Number}
                placeholder="Enter enrollment number"
                onChange={HandleChange}
              />
            </div>

            <div className="student-login-form-group">
              <label>Password</label>
              <input
                type="password"
                name="Password"
                value={Data.Password}
                placeholder="Enter password"
                onChange={HandleChange}
              />
            </div>

            <button type="submit" className="student-login-submit-btn" onClick={()=>navigate('/Student/Dashboard')}>
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="student-login-right">
        <div className="student-login-right-content">
          <h1>STUDENT PORTAL</h1>
          <p>
            Log in to access your dashboard, continue your learning journey,
            manage your profile, and explore your enrolled skills and courses.
          </p>

          <div className="student-login-action-box">
            <span>New here or want to go back?</span>

            <div className="student-login-action-buttons">
              <button className="student-side-btn" onClick={()=>navigate('/Student/Register')}>Register</button>
              <button className="student-side-btn" onClick={()=>navigate('/')}>Home Page</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills_Student_Login_Form;