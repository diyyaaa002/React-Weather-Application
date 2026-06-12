import React, { useCallback } from 'react'
import Usecallbackbutton from './Usecallbackbutton'
import Usecallbackvalue from './Usecallbackvalue'

function Usecallbackmain() {

const [Age,SetAge]=React.useState(18)
const [Salary,SetSalary]=React.useState(25000)
const Incrementage=useCallback(()=>{
    SetAge(Age+1)
    console.log('Usecallback Age')
},[Age])

const Incrementsalary=useCallback(()=>{
    SetSalary(Salary+1000)
     console.log('Usecallback Salary')
},[Salary])

  return (
    <div>
<Usecallbackbutton text='age'  value={Incrementage}/>
<Usecallbackvalue text='age' value={Age} />
<Usecallbackbutton text='salary' value={Incrementsalary}/>

<Usecallbackvalue text='salary'  value={Salary}/>
    </div>
  )
}

export default Usecallbackmain