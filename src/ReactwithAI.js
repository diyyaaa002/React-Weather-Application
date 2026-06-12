import React from 'react'
import axios from 'axios'
import './ReactwithAi.css'
function ReactwithAI() {
  const [Data, SetData] = React.useState({
    topic: "",
    totalMarks: "",
    totalQue: "",
    type: ""
  })

  const HandleChange = (e) => {
    SetData({
      ...Data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
   axios.post("http://localhost:7000/generatePaper",Data)
   .then((res)=>{
    console.log(res.data)
   })
   .catch((err)=>{
    console.log("Error",err)
   })
  }

  return (
    <div className="container">
  <div className="form-box">
    <h1>Question Paper Generator</h1>

    <div className="form-group">
      <label>Topic</label>
      <input
       type="text"
      name="topic" 
      value={Data.topic} 
      onChange={HandleChange} />
    </div>

    <div className="form-group">
      <label>Total Marks</label>
      <input 
      type="number" 
      name="totalMarks" 
      value={Data.totalMarks} 
      onChange={HandleChange} />
    </div>

    <div className="form-group">
      <label>Total Questions</label>
      <input 
      type="number" 
      name="totalQue" 
      value={Data.totalQue} 
      onChange={HandleChange} />
    </div>

    <div className="form-group">
      <label>Type</label>
      <input 
      type="text" 
      name="type" 
      value={Data.type} 
      onChange={HandleChange} />
    </div>

    <button className="submit-btn" onClick={handleSubmit}>
      Submit
    </button>
  </div>
</div>

  )
}

export default ReactwithAI
