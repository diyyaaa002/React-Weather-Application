import React from 'react'
import axios from "axios";
function Weather() {

  const [Data,setData]=React.useState("")
  const [WData,WsetDaata]=React.useState('')
  const HandleClick=()=>{
  
    const apiKey = '2fc7d89c27d54f68aba124124250504'
   
      axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${Data}&aqi=no;`)
    .then((res) => {
     console.log(res.data);
    })
    .catch((err)=>{
      console.log("error",err);
    })
    
  
  }
  return (
    <div>

      <nav class="navbar bg-body-tertiary" style={{backgroundColor:'black'}}>
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1" >WEATHER APP</span>
  </div>
</nav>

<center>
  <label/>Enter the city:
<input  type="text"onChange={(e)=>{
  // console.log(e.target.value)
  setData(e.target.value)
}}/>
<br></br><br></br>

<button class="btn btn-info" onClick={()=>{
  console.log(Data)
  HandleClick()
}}>Submit Here</button>
{Data.map((item) => {
        return <div id='mydiv'>{item.title}</div>;
      })}
</center>

    </div>
  )
}

export default Weather