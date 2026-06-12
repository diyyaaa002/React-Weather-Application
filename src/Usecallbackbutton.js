import React from 'react'

function Usecallbackbutton(props) {
    console.log('Usecallbackbutton',props.text)
  return (
    <div>
        <button onClick={()=>{
            props.value()
        }}>
            Increment {props.text}
        </button>
    </div>
  )
}

export default React.memo(Usecallbackbutton)