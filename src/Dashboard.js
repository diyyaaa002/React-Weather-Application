import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Dashboard() {
    useEffect(()=>{
         let token=localStorage.getItem("Token")
         console.log('Token',token)
axios.get("http://localhost:7000/Dashboard/GetDashboard", {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
.then(res => console.log(res.data))
.catch(err => console.log(err));
    },[])
  
    let navigate=useNavigate()
  return (
    <div>
      <center>
        Dashboard <br/><br/>
        <button
        className='btn btn-info'
        onClick={()=>{
          navigate('/MainPage')
        }}>MainPage</button>
      </center>
    </div>
  )
}

export default Dashboard