import React from 'react'

function Timepass() {
    const [Data,SetData]=React.useState({
        Task:"",
        Date:""
    })
    const HandleChange=(e)=>{
      
      SetData({...Data,
        [e.target.name]:e.target.value
      })
      
    }
  return (
    <div>
      <center>
        <label>Task</label>
        <input
        name='Task'
        value={Data.Task}
        placeholder="Task"
        onChange={HandleChange}/>
        <br/>
        <br/>
        <label>Date</label>
        <input
        name='Date'
        value={Data.Date}
        placeholder="Date"
        type='Date'
        onChange={HandleChange}/>
        <br/>
        <br/>
        <button
        
        onClick={()=>{
          SetData("  ")
          console.log(Data)}}>Submit</button>

        {/* {Data && Data.map((val)=>(
          <>
          <p>Task:</p>{val.Task}
          <p>Last Date:</p>{val.Date}
          </>
          
        ))} */}
      </center>
       
    </div>
  )
}

export default Timepass