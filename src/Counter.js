import React from 'react'
function Counter()
{
    const [Count, SetCount]=React.useState(0)
    const HandleClick=()=>
    {
        // alert('INCREMENT')
        if(Count<5){
            SetCount(Count+1)
            
        }
        else{
alert('value is very high')
        }
        
    }
    
    const HandleClick1=()=>
        {
            // alert('DECREMENT')
            
            if(Count>0)
                {
                   
                    // SetCount()
                    SetCount(Count-1)
                     
                }
               else {alert('value no defined')}
        }

    return(
        <div>
       < button type="button" class="btn btn-primary" onClick={HandleClick}>increment</button><br></br><br></br>


       {Count}<br></br>


<button type="button" class="btn btn-secondary" onClick={HandleClick1}>Decrement</button><br></br><br></br>
</div>
    )
}
export default Counter