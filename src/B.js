import React from 'react'
function B() {
    let name='Diya'
       return(
        <div style={{backgroundColor:'Red',border:'2px solid black'}}>
            Hello from B
        {name}
        <button type="button" class="btn btn-primary">Primary</button>
        </div>
       )
    }
export default B