import React,{useState} from 'react'
import {FaCopy,FaKey} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast"; 
import './Automatuc_OTP_Generator.css'
function Automatic_OTP_Generator() {
    const [OTP,setOTP]=useState("")
    const [length,setLength]=useState(5)


    const numChars="0123456789"
    const getRandomeNumber=(str)=>str[Math.floor(Math.random()*str.length)]
    

    const shuffleRandomNumber=(str)=>str.split("").sort(()=>Math.random()-0.5).join("")
    
    const generateOTP=()=>{
        let temOTP=""
        for(let i=1;i<=length;i++){
         temOTP+=getRandomeNumber(numChars)
        }
        setOTP(shuffleRandomNumber(temOTP))
        
    }
    const copyToClipboard = () => {
    if (!OTP) return;
    navigator.clipboard.writeText(OTP);
    toast.success("OTP copied!");
  };
  return (
    <div>
        <h1>OTP Generator</h1>
        <div>
            <Toaster position="top-center" />
            <input
            value={OTP}
            readOnly/>
            <button onClick={copyToClipboard}>
          <FaCopy />
        </button><br/>
        <label>Length</label>
        <input
        min={4}
        max={6}
        type="number"
        value={length}
        onChange={(e)=>setLength(e.target.value)}/><br/>
        <button className="generate-btn" onClick={generateOTP}>
        <FaKey /> Generate OTP
      </button>
            
        </div>
    </div>
  )
}

export default Automatic_OTP_Generator