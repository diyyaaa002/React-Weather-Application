import React from 'react'
function A1 ()

{
    console.log("A1 called")
    return(
        <div>
        <h2>Component A1</h2>
        </div>
    )
}
export default React.memo(A1)