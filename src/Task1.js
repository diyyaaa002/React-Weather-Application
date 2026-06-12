import React, { useMemo } from 'react'
function Task1() {
    const[a,setA]=React.useState(0)
    const[b,setB]=React.useState(0)
    const[ans,setAns]=React.useState(0)
    useMemo(()=> 
    {
        setAns(a+b);
    },[a,b]);
       return(
        <div>
            <input type="email" class="form-control" placeholder="1st number" id="FullName" onChange={(e)=>{setA(parseInt(e.target.value))}} ></input>
            <label for="floatingInput"></label>
            <input type="email" class="form-control" placeholder="2nd number" id="FullName" onChange={(e)=>{setB(parseInt(e.target.value))}}></input>
             <label for="floatingInput"></label>
            {ans}
        </div>
       )
    }
export default Task1