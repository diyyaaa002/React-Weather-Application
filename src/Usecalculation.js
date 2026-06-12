import React from 'react'

function Usecalculation() {
    const [A,setA]=React.useState(0)
    const [B,setB]=React.useState(0)
    const [Ans,setAns]=React.useState(0)
    const Addition=()=>
    {
        setAns(A+B)
    }
    const Subtraction=()=>
        {
            setAns(A-B)
        }
       
  return[A,setA,B,setB,Ans,setAns,Addition,Subtraction]
}

export default Usecalculation