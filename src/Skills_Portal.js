import React from "react";
import "./Skills_Portal.css";
import { useNavigate } from "react-router-dom";

function Skills_Portal() {
  let navigate=useNavigate()
  return (
    <div className="split-container">

      {/* TITLE */}
      <h1 className="portal-title">SKILLS PORTAL</h1>

      <div className="admin-side">
        <div className="content">
          <h1>🛡 Admin Portal</h1>
          <p>Manage students, courses and analytics.</p>
          <button
          onClick={()=>navigate('/Student/Register')}>Admin Login</button>
        </div>
      </div>

      <div className="student-side">
        <div className="content">
          <h1>🎓 Student Portal</h1>
          <p>Access skills, track progress and dashboard.</p>
          <button
          onClick={()=>navigate('/Student/Register')}>Student Login</button>
        </div>
      </div>

    </div>
  );
}

export default Skills_Portal;