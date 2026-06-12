import React from 'react'
function B1 (props)
{
    console.log("B1 called")
    return(
        <div>
        <h2>Component B</h2>
        <h3>Color : {props.color}</h3>
        </div>
    )
}
export default React.memo(B1)