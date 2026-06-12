import React from 'react'

function Task3() {
    const [Data,SetData]=React.useState('')
    const HandleChange=(e)=>
    {
        console.log("events",e.target.name,e.target.value)
        SetData({
            ...Data,
            [e.target.name]:e.target.value
        })
    }
    const HandleClick=(e)=>
    {
        console.log("events",Data)
    }
  return (
    <div>
        <center>
            <h1>REGISTRATION FORM</h1>
            <label>UserName</label>
            <input
            name='UserName'
             onChange={HandleChange}
             value={Data.UserName}/><br></br><br></br>
            <label>Password</label>
            <input
            name='Password'
            onChange={HandleChange}
            value={Data.Password}/><br></br><br></br>
            <button className='btn btn-success' onClick={HandleClick}>Submit</button><br></br><br></br>
            <button className='btn btn-warning' onClick={()=>
                {
                    localStorage.setItem("Useritem",JSON.stringify(Data))
                }
            }>Set Items</button>
            <br></br><br></br>
            <button className='btn btn-info' onClick={()=>
                {
                    let ans=localStorage.getItem("Useritem")
                    console.log(JSON.parse(ans).UserName)
            }
            }> Get Items</button>
            <br></br><br></br>
            <button className='btn btn-primary' onClick={()=>
                {
                    localStorage.removeItem("Useritem")
                }
            }>Delete Items</button>
            <br></br><br></br>
            <button className='btn btn-secondary' onClick={()=>
                {
                    localStorage.clear()
                }
            }>Clear Items</button>
        </center>
    </div>
  )
}

export default Task3