import React from "react"
function Task2(props){
    console.log("props",props.ProductData)
    return(
        <div>

{props.ProductData.map((val)=>
(
    <>
  {val.Name}
  </>
))}
        </div>
    )
}
export default Task2;