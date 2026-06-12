import React from 'react';
let arr=[]
function Events()
{
    const HandleClick=()=>
    {
        alert('button got clicked')
    }
    const HandleChange=(e)=>
    {
        console.log(e.target.value)
    }
    const HandleRadioChange=(e)=>
    {
        console.log(e.target.value)
        
        arr.push(e.target.value)
        console.log(arr)
        if(arr.includes(e.target.value))
        {
            arr.splice(arr.indexOf(e.target.value),1)
        }
        else{
            console.log(arr)
        }
    }



return(
    <div>
    <button type="button" class="btn btn-primary" onClick={HandleClick}>Primary</button><br></br><br></br>
<button type="button" class="btn btn-secondary" onClick={()=>{HandleClick()}}>Secondary</button><br></br><br></br>
<input onChange={(e)=>{HandleChange(e)}}></input>
<br></br><br></br>
<h3>Select you Hobby    </h3>
<select onChange={(e)=>{console.log(e.target.value)}}>
    <option value='Drawing'>Drawing</option>
    <option value='Dancing'>Dancing</option>
    <option value='Singing'>Singing</option>
    <option value='Cooking'>Cooking</option>
</select>
<br></br><br></br>
<input type='date' onChange={(e)=>{console.log(e.target.value)}}></input>
<br></br><br></br>
Gender<br></br>
<label>Female</label>
<input type='radio' name='Gender' value='Female' onChange={(e)=>{console.log(e.target.value)}}></input>
<label>Male</label>
<input type='radio' name='Gender' value='Male' onChange={(e)=>{console.log(e.target.value)}}></input>
<br></br><br></br>
<label>React Js</label>
<input type='checkbox' value='React Js' onChange={(e)=>{HandleRadioChange(e)}}></input>
<label>Node Js</label>
<input type='checkbox' value='Node Js' onChange={(e)=>{HandleRadioChange(e)}}></input>

    </div>
)
}
export default Events