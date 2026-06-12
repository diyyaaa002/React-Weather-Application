import React from 'react'

function Expense() {
    const [Data,SetData]=React.useState({
        Expense:"",
        Amount:"",
        Description:"",
        Transaction:""
})
const[products,setProducts]=React.useState([])
    const HandleChange=(e)=>
    {
        console.log('Event',e)
        SetData({
            ...Data,
            [e.target.name]:e.target.value
        })
    }
    
  const handleSubmit=()=>{
    setProducts([...products,Data])
    SetData({})
  }
  console.log(Data)

  console.log("products",products)
  return (
    <div><center>
        <label><b>Expense</b></label>
        <input
        name='Expense'
        value={Data.Expense?Data.Expense:''}
        onChange={HandleChange}
        /><br></br><br></br>


        <label><b>Amount</b></label>
        <input
        name='Amount'
        value={Data.Amount?Data.Expense:''}
        onChange={HandleChange}
        /><br></br><br></br>



        <label><b>Transaction</b></label>
        <select name='Transaction' onChange={(e)=>{
            HandleChange(e)
        }}>
            <option 
            name='Transaction'
        value='Credit'
      >Credit</option>
            <option
            name='Transaction'
            value='Debit'
           >Debit</option>
        </select>
        <br></br><br></br>



        <label><b>Description</b></label>
        <input
        name='Description'
        value={Data.Description?Data.Description:""}
        onChange={HandleChange}
        /><br/><br/>
        <button className='btn btn-success' onClick={()=>handleSubmit()}>Submit</button>
        <br/><br/>

        <table>
            <tr>
                <td>Expense</td>
                <td>Amount</td>
                <td>Transaction</td>
                <td>Description</td>
                
            </tr>
            
                    {products && products.map((val)=>
        {
            return <tr>
                <td>{val.Expense}</td>
                <td>{val.Amount}</td>
                <td>{val.Transaction}</td>
                <td>{val.Description}</td>
                
            </tr>
        })}
        </table>

    </center></div>
  )
}

export default Expense