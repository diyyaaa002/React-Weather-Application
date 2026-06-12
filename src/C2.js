import React,{useContext} from 'react'
import user from './Createcontext'
function C2() {
    let data=useContext(user)
console.log("Data",data)
  return (
       <div>
        <h1>{data}</h1>
        
    </div>
  )
}

export default C2
