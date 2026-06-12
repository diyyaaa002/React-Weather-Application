
import React,{useRef} from 'react'
function C1 ()
{
    let inputElement=useRef()

    console.log("A1 called")
    return(
        <div>
        <h2>Component C1</h2>
        <input type='textarea' ref={inputElement}/>
        <input type='textarea'/>
        <input type='textarea'/>
        <button onClick={()=>{inputElement.current.focus()}}>Submit</button>
        </div>
    )
}
export default C1