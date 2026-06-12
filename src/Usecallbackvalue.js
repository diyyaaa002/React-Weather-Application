import React from 'react'

function Usecallbackvalue(props) {
    console.log('Usecallbackvalue',props.text)
  return (
    <div>{props.value}</div>
  )
}

export default React.memo(Usecallbackvalue)