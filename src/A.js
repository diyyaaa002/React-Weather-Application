import React from 'react'
function A (props)
{
    return(
        <div id='myid'>
       {props.ProductData.map((val)=>
       {
return <div>
    {val.id}<br></br>
    {val.Name}<br></br>
    {val.Sem}<br></br>
</div>
       })}       
        </div>
    )
}
export default A