import React, { useEffect } from 'react'
import axios from 'axios'
function Mainpage() {
     useEffect(()=>{
        let token=localStorage.getItem("Token")
axios.get('http://localhost:7000/MainPage/GetMainPage',{
    headers:{
        Authorization:`Bearer ${token}`
    }
})
.then(res=>console.log(res.data))
.catch(err=>console.log(err))
     },[])
  return (
    <div>MainPage</div>
  )
}

export default Mainpage