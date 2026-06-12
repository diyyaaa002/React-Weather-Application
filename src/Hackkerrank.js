import React,{useState} from 'react'

function Hackkerrank() {
    const [Name,SetName]=useState('')
        const [Email,SetEmail]=useState('')

            const [Message,SetMessage]=useState('')

  return (
    <div>
        <center>
            <h1>CONTACT FORM</h1>
            <label>Name:</label>
            <input
            value={Name}
            onChange={(e)=>SetName(e.target.value)}/>
            <label>Email:</label>
            <input
            value={Email}
            onChange={(e)=>SetEmail(e.target.value)}/>
            <label>Message:</label>
            <input
            value={Message}
            onChange={(e)=>SetMessage(e.target.value)}/>
            <button 
            className='btn btn-success'
            onClick={()=>console.log("Data",Name,Email,Message)}>Submit</button>

        </center>
    </div>
  )
}

export default Hackkerrank