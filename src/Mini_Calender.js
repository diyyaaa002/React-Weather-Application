import React, { useEffect } from 'react'
import './Mini_Calender.css'
import Swal from "sweetalert2"

function Mini_Calender() {
     const today=new Date()
    const [currentMonth,setCurrentMonth]=React.useState(today.getMonth())
    const [currentYear,setCurrentYear]=React.useState(today.getFullYear())
   
    const year=today.getFullYear()
    const month=today.getMonth()
    const firstDay=new Date(currentYear,currentMonth,1)
    const lastDay=new Date(currentYear,currentMonth+1,0).getDate()
    const [Event,SetEvent]=React.useState("")
    const [Events,SetEvents]=React.useState({})
    
    const [InputPosition,SetInputPosition]=React.useState({x:0,y:0})
    const [SelectDate,SetSelectDate]=React.useState(null)
    // console.log("firstday ",firstDay)
    // console.log("last day",lastDay)
    // console.log("year ",year)
    // console.log("month ",month)
    const colors = ["#ff6b6b","#6bafff","#ff9f43","#2ed573","#ff6348"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const newEvent = { text: Event, color: randomColor };
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     
   //const dateKey=`${currentYear}-${currentMonth}-${SelectDate}`
    const Handleclickday=(i,e)=>{
     SetSelectDate(i)
     const rect = e.target.getBoundingClientRect();
     SetInputPosition({ x: rect.right + 10, y: rect.top });
    }
    function nextMonth(){
        if(currentMonth===11){
            setCurrentMonth(0)
            setCurrentYear(currentYear+1)
        }
        else{
            setCurrentMonth(currentMonth+1)
        }
    }
    function prevMonth(){
        if(currentMonth===0){
            setCurrentYear(currentYear-1)
            setCurrentMonth(11)
        }
        else{
            setCurrentMonth(currentMonth-1)
        }
    }
    function DeleteEvents(day,index){
    const newEvents={...Events}
    newEvents[day].splice(index,1)
    if(newEvents[day].length===0){
      delete newEvents[day]
    }
     SetEvents(newEvents)
   }
    
    const days=[]
    for (let i = 0; i < firstDay.getDay(); i++) {
  days.push(<div key={"empty"+i} className="day empty"></div>);
}

    for(let i=1;i<=lastDay;i++){
        days.push(
          const dateKey = `${currentYear}-${currentMonth}-${i}`;
            <div key={i} className={`day ${SelectDate===i?"selected":""}`}
             onClick={(e)=>Handleclickday(i,e)}>
                <p>{i}</p>
                {Events[i]?.map((ev,index)=>(
                    <div
                    key={index}
                    style={{background:ev.color}}
                    className='event'>
                        {ev.text}
                        <span onClick={()=>DeleteEvents(i,index)}>x</span>
                        </div>
                        
                ))}
            </div>
        )
    }
    console.log(days)
   
   
    useEffect(()=>{
     localStorage.setItem("Task",JSON.stringify(Events))
    },[Events])
    useEffect(()=>{
      const saved=localStorage.getItem("Task")
      if(saved){
        SetEvents(JSON.parse(saved))
      }
    },[])
      return (
    <div>
        <div className="month-nav">
  <p><b><i>{monthNames[currentMonth]} {currentYear}</i></b></p>
  <div className="nav-buttons">
    <button onClick={prevMonth}>←</button>
    <button onClick={nextMonth}>→</button>
  </div>
</div>
        
        {/* <p>{today.toDateString()}</p>
        <p>TotalDays:  {lastDay}</p> */}
        <div className="day-names">
  {dayNames.map((day, index) => (
    <div key={index} className="day-name">{day}</div>
  ))}
</div>
        <div className='calender'>{days}</div>
        {SelectDate && (
            <div
            style={{
      position: 'absolute',
      top: InputPosition.y,
      left: InputPosition.x,
    }}>
                <input
                value={Event}
                placeholder="Enter event"
                onChange={(e)=>SetEvent(e.target.value)}/>
           
                <button
                onClick={()=>{
                    if (!Event.trim()) {  // check if input is empty
                       alert("event empty")
     
      return; // stop further execution
    }
    SetEvents({
      ...Events,
      [dateKey]: [...(Events[dateKey] || []), newEvent]
    });
    SetEvent(""); // clear input

    // success popup
   alert("event added succesfully")
  
  
                                  
     
                }}>
                    Save
                </button>
            </div>
        )}
       
    </div>
  )
}

export default Mini_Calender