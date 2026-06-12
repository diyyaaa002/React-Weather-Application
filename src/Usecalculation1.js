import React from 'react'
import Usecalculation from './Usecalculation'
function Usecalculation1() {
    const [A,setA,B,setB,Ans,setAns,Addition,Subtraction]=Usecalculation()
  return (
    <div>
      1st Number  <input onChange={(e)=>{
setA(parseInt(e.target.value))
        }}/><br></br><br></br>
        2nd Number<input onChange={(e)=>{
setB(parseInt(e.target.value))
        }}/><br></br><br></br>
      Operation  <button onClick={()=>{
Addition()
        }}>Addition</button>
        <button onClick={()=>{
Subtraction()
        }}>Subtraction</button><br></br><br></br>
       ANSWER: {Ans}
    </div>
  )
}

export default Usecalculation1