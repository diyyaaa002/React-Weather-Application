import React, { useState } from "react";
import "./Skills_Student_Main.css";

const progressData = [
  { skill: "React Basics", percent: 78 },
  { skill: "JavaScript", percent: 61 },
  { skill: "Communication", percent: 84 },
  { skill: "UI / UX Design", percent: 45 },
];

const enrolledCourses = [
  {
    title: "Modern React Development",
    mentor: "Prof. A. Mehta",
    lesson: "Hooks, Routing & State",
    progress: "12 / 18 modules",
  },
  {
    title: "Professional Communication",
    mentor: "Dr. R. Shah",
    lesson: "Presentation Confidence",
    progress: "8 / 10 modules",
  },
  {
    title: "Git & GitHub Mastery",
    mentor: "Mentor K. Patel",
    lesson: "Branches & Pull Requests",
    progress: "6 / 9 modules",
  },
];

const recommendedSkills = [
  "MERN Stack",
  "Figma",
  "Public Speaking",
  "Node.js",
  "API Integration",
  "Team Collaboration",
];

const achievements = [
  { icon: "🔥", title: "7 Day Streak" },
  { icon: "🏅", title: "First Skill Completed" },
  { icon: "⚡", title: "Fast Learner" },
  { icon: "🎯", title: "Quiz Master" },
];

const tasks = [
  "Complete React quiz",
  "Update JavaScript progress",
  "Add one new skill",
  "Finish UI practice task",
];

function ProgressRing({ value, label }) {
  const degree = `conic-gradient(var(--ring-accent) ${value * 3.6}deg, rgba(255,255,255,0.12) 0deg)`;
  return (
    <div className="ring-card">
      <div className="ring-outer" style={{ background: degree }}>
        <div className="ring-inner">
          <span>{value}%</span>
        </div>
      </div>
      <p>{label}</p>
    </div>
  );
}

function Skills_Student_Main() {
  const [skills, setSkills] = useState([
    { id: 1, name: "React", level: "Intermediate", percent: 78, category: "Frontend" },
    { id: 2, name: "JavaScript", level: "Intermediate", percent: 61, category: "Programming" },
    { id: 3, name: "Communication", level: "Advanced", percent: 84, category: "Soft Skill" },
    { id: 4, name: "UI Design", level: "Beginner", percent: 45, category: "Design" },
  ]);

  const handleSkillChange = (id, field, value) => {
    setSkills((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: field === "percent" ? Number(value) : value } : item
      )
    );
  };

  return (
    <div className="student-main-page">
      <div className="student-main-bg-blur blur-one"></div>
      <div className="student-main-bg-blur blur-two"></div>

      <aside className="student-sidebar">
        <div className="brand-box">
          <div className="brand-icon">✦</div>
          <div>
            <h2>SkillSphere</h2>
            <span>Student Command Center</span>
          </div>
        </div>

        <nav className="sidebar-menu">
          <a href="#dashboard" className="active">Dashboard</a>
          <a href="#courses">My Courses</a>
          <a href="#skills">Skill Matrix</a>
          <a href="#manage-skills">Manage Skills</a>
          <a href="#achievements">Achievements</a>
          <a href="#settings">Settings</a>
        </nav>

        <div className="sidebar-bottom-card">
          <h4>Level 4 Learner</h4>
          <p>1280 XP earned</p>
          <div className="xp-track">
            <div className="xp-fill"></div>
          </div>
          <small>120 XP to next badge</small>
        </div>

        <button className="logout-btn">Logout</button>
      </aside>

      <main className="student-main-content">
        <section className="hero-banner glass-card" id="dashboard">
          <div className="hero-left">
            <div className="hero-tag">Skill Analytics</div>
            <h1>WELCOME BACK, DP</h1>
            <p>
              Track your skills, update your progress, and shape your growth journey
              through a premium learning dashboard built for your future.
            </p>

            <div className="hero-stats">
              <div className="mini-stat">
                <span>🔥 Streak</span>
                <strong>7 Days</strong>
              </div>
              <div className="mini-stat">
                <span>📘 Active Courses</span>
                <strong>3</strong>
              </div>
              <div className="mini-stat">
                <span>🧠 Skills Tracking</span>
                <strong>4 Skills</strong>
              </div>
            </div>

            <div className="hero-buttons">
              <button>Track Skills</button>
              <button className="ghost-btn">Edit Progress</button>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-orbit">
              <div className="center-core">AI</div>
              <span className="orbit orbit-1">React</span>
              <span className="orbit orbit-2">Git</span>
              <span className="orbit orbit-3">UI</span>
              <span className="orbit orbit-4">JS</span>
              <span className="orbit orbit-5">Node</span>
            </div>
          </div>
        </section>

        <section className="top-grid">
          <div className="profile-card glass-card">
            <div className="profile-top">
              <div className="profile-avatar">DP</div>
              <div>
                <h3>Dhruvi Patel</h3>
                <p>B.E. Computer Engineering</p>
              </div>
            </div>

            <div className="profile-details">
              <div><span>Enrollment</span><strong>23CE1042</strong></div>
              <div><span>Semester</span><strong>Semester 4</strong></div>
              <div><span>Track</span><strong>Web Development</strong></div>
              <div><span>Status</span><strong>Active</strong></div>
            </div>
          </div>

          <div className="continue-card glass-card">
            <span className="section-tag">Continue Learning</span>
            <h3>Modern React Development</h3>
            <p>Resume from: Hooks, Routing & State Management</p>
            <div className="course-progress-bar">
              <div className="course-progress-fill"></div>
            </div>
            <div className="continue-meta">
              <span>78% completed</span>
              <span>12 / 18 modules</span>
            </div>
            <button>Continue Course</button>
          </div>

          <div className="xp-card glass-card">
            <span className="section-tag">Performance Pulse</span>
            <h3>Weekly Growth</h3>
            <div className="xp-numbers">
              <div>
                <span>Total XP</span>
                <strong>1280</strong>
              </div>
              <div>
                <span>This Week</span>
                <strong>+210</strong>
              </div>
            </div>
            <div className="growth-bars">
              <span style={{ height: "52%" }}></span>
              <span style={{ height: "76%" }}></span>
              <span style={{ height: "60%" }}></span>
              <span style={{ height: "88%" }}></span>
              <span style={{ height: "68%" }}></span>
              <span style={{ height: "94%" }}></span>
              <span style={{ height: "82%" }}></span>
            </div>
          </div>
        </section>

        <section className="skills-section glass-card" id="skills">
          <div className="section-header">
            <div>
              <span className="section-tag">Skill Matrix</span>
              <h2>Your Progress Overview</h2>
            </div>
            <button className="small-action-btn">View All</button>
          </div>

          <div className="progress-grid">
            {progressData.map((item, index) => (
              <div className="progress-item" key={index}>
                <div className="progress-head">
                  <span>{item.skill}</span>
                  <strong>{item.percent}%</strong>
                </div>
                <div className="line-progress">
                  <div style={{ width: `${item.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="ring-grid">
            <ProgressRing value={78} label="React Mastery" />
            <ProgressRing value={61} label="Problem Solving" />
            <ProgressRing value={84} label="Communication" />
            <ProgressRing value={45} label="Design Thinking" />
          </div>
        </section>

        <section className="manage-skills-section glass-card" id="manage-skills">
          <div className="section-header">
            <div>
              <span className="section-tag">Editable Skill Tracker</span>
              <h2>Manage Your Skills</h2>
            </div>
            <button className="small-action-btn">Save Changes</button>
          </div>

          <div className="skill-manager-grid">
            {skills.map((item) => (
              <div className="skill-manager-card" key={item.id}>
                <div className="skill-manager-top">
                  <h3>{item.name}</h3>
                  <span>{item.percent}%</span>
                </div>

                <div className="skill-manager-group">
                  <label>Skill Name</label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleSkillChange(item.id, "name", e.target.value)}
                  />
                </div>

                <div className="skill-manager-group">
                  <label>Level</label>
                  <select
                    value={item.level}
                    onChange={(e) => handleSkillChange(item.id, "level", e.target.value)}
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>

                <div className="skill-manager-group">
                  <label>Category</label>
                  <input
                    type="text"
                    value={item.category}
                    onChange={(e) => handleSkillChange(item.id, "category", e.target.value)}
                  />
                </div>

                <div className="skill-manager-group">
                  <label>Progress Percentage</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={item.percent}
                    onChange={(e) => handleSkillChange(item.id, "percent", e.target.value)}
                  />
                </div>

                <div className="line-progress manager-progress">
                  <div style={{ width: `${item.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mid-grid" id="courses">
          <div className="courses-card glass-card">
            <div className="section-header">
              <div>
                <span className="section-tag">My Courses</span>
                <h2>Enrolled Courses</h2>
              </div>
              <button className="small-action-btn">Browse More</button>
            </div>

            <div className="courses-list">
              {enrolledCourses.map((course, index) => (
                <div className="course-item" key={index}>
                  <div className="course-left">
                    <div className="course-icon">📘</div>
                    <div>
                      <h4>{course.title}</h4>
                      <p>{course.mentor}</p>
                    </div>
                  </div>

                  <div className="course-center">
                    <span>Current lesson</span>
                    <strong>{course.lesson}</strong>
                  </div>

                  <div className="course-right">
                    <span>{course.progress}</span>
                    <button>Open</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="right-column">
            <div className="tasks-card glass-card">
              <span className="section-tag">Daily Challenge</span>
              <h2>Today's Tasks</h2>
              <ul>
                {tasks.map((task, index) => (
                  <li key={index}>
                    <span className="task-dot"></span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="recommend-card glass-card">
            <div className="section-header">
              <div>
                <span className="section-tag">Recommended Next Move</span>
                <h2>Skills Picked For You</h2>
              </div>
            </div>

            <div className="recommend-grid">
              {recommendedSkills.map((skill, index) => (
                <div className="recommend-item" key={index}>
                  <div className="recommend-glow"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="achievement-card glass-card" id="achievements">
            <span className="section-tag">Achievements</span>
            <h2>Your Badges</h2>
            <div className="achievement-grid">
              {achievements.map((item, index) => (
                <div className="achievement-item" key={index}>
                  <div className="achievement-icon">{item.icon}</div>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Skills_Student_Main;