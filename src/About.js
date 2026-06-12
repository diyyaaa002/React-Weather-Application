import React,{useNavigate} from 'react-router-dom'

function About() {
  let Navigate=useNavigate()
  return (
    <div>About

      <button onClick={()=>{Navigate('/Home')}}>Home</button>
    </div>
  )
}

export default About