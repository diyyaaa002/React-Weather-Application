//Reciever gmail,subject,text
import React from 'react'
import axios from 'axios'
import('./GmailService.css')
function GmailService() {
    const [Data,SetData]=React.useState({
       
        Reciever:"",
        Message:"",
        Subject:""
    })
    const HandleSubmit=(e)=>{
        console.log("Evenet",e.target.name,e.target.value)
SetData({
    ...Data,
    [e.target.name]:e.target.value
})

    }
    const HandleMail=()=>{
    axios.get('http://localhost:7000/NodeMailer/GetMail',Data)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log("Error",err)
    })
}
  return (
    <div className="mail-container">
        <center>
            <h1>Welcome to Mail Service!!!</h1>
           
            <label>Reciever</label>
            <input
            name='Reciever'
            value={Data.Reciever}
            onChange={HandleSubmit}
             type='Email'/><br/><br/>
              
            <label>Messae</label>
            <input
            name='Message'
            value={Data.Message}
            onChange={HandleSubmit}
            type='text'/>

             <label>Subject</label>
            <input
            name='Subject'
            value={Data.Subject}
            onChange={HandleSubmit}
            type='text'/>
            <button
            className="send-btn"
            onClick={
            HandleMail()
            }>Send</button>

        </center>
    </div>
  )
}

export default GmailService