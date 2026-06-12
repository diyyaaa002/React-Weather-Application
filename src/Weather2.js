import React from 'react'
import axios from 'axios'
function Weather2() {
    const [Data,SetData]=React.useState('')
    const [Wdata,SetWdata]=React.useState(null)
    console.log(Data)
    const HandleClick=()=>
    {
        const apiKey = '2fc7d89c27d54f68aba124124250504';
    axios.get("http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${Data}&aqi=no;`").then((res)=>
    {
        SetWdata(res.data)
    }).catch((err)=>
    {
console.log("error",err)
    })
    }
    
  return (
    <div>
<h1>WEATHER APP</h1>
<label><strong>Enter the city name:</strong></label>
<input
type='text'
onChange={(e)=>SetData(e.target.value)}/>
<button className='btn btn-success'
onClick={HandleClick}>
Submit
</button>
{Wdata && (
          <div id="weather-info">
            <h3>Weather Information:</h3>
            <p><strong>City:</strong> {Wdata.location.name}</p>
            <p><strong>Temperature:</strong> {Wdata.current.temp_c}°C</p>
            <p><strong>Condition:</strong> {Wdata.current.condition.text}</p>
            <p><strong>Humidity:</strong> {Wdata.current.humidity}%</p>
          </div>
        )}
    </div>
  )
}

export default Weather2