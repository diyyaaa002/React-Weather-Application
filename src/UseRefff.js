import React from 'react'

function UseRefff() {
    let inputelement=React.useRef()
  return (
    <div>
        <input ref={inputelement}/><br></br>
        <input/><br></br>
        <input /><br></br>
        <button onClick={()=>{inputelement.current.focus()}}>Click</button>
    </div>
  )
}

export default UseRefff