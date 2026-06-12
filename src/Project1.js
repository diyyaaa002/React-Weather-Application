import React,{useState} from 'react'
import { FaKey,FaIcons, FaCopy } from 'react-icons/fa'
import toast,{Toaster} from 'react-hot-toast'

function Project1() {
    const [Password,setPassword]=useState("")
    const [length,setLength]=useState(12)
    const [uppercase,setUppercase]=useState(true)
    const [lowercase,setLowercase]=useState(true)
    const [numbers,setNumbers]=useState(true)
    const [symbols,setSymbols]=useState(true)

    //Character Sets
    const upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerChars="abcdefghijklmnopqrstuvwxyz"
    const numChars="0123456789"
    const symbolChars="!@#$%^&*(){}[]|\<>,."

    const getRandomChar=(str)=>
        str[Math.floor(Math.random()*str.length)]
    
    const shuffledChars=(str)=>
        str.split("").sort(()=>Math.random()-0.5).join("")
    
    const generatePassword=()=>{
        const selectedSets=[]
        
        if (uppercase) selectedSets.push(upperChars)
        if (lowercase) selectedSets.push(lowerChars)
        if (numbers) selectedSets.push(numChars)
        if (symbols) selectedSets.push(symbolChars)
            
        if(selectedSets.length===0) return setPassword("Select atleast one option")

        if(length<selectedSets.length) return setPassword(`Password length should be minimum ${length}`)
        
        let tempPassword=""
         //select one element atleast from each set
        selectedSets.forEach((set)=>{
            tempPassword += getRandomChar(set)
        })
        //select the remaining chararcters
        const allChars=selectedSets.join()
        for(let i=tempPassword.length;i<length;i++){
            tempPassword+=getRandomChar(allChars)
        }
        setPassword(shuffledChars(tempPassword))
        
    }
    const copyToClipboard = () => {
    if (!Password || Password.includes("Select") || Password.includes("Min")) return;
    navigator.clipboard.writeText(Password);
    toast.success("Password copied!");
  };
  return (
    <div>
        <div>
            <Toaster position='top-center'/>
            <h1>Password Generator</h1>
            <input
            type='text'
            value={Password}
            readOnly/>
            <button onClick={copyToClipboard}>
            <FaCopy/>
            </button>
            <br/>
            <div>
                <label>Length</label>
                <input
                min={4}
                max={30}
                value={length}
                onChange={(e)=>setLength(Number(e.target.value))}/>

            </div><br/>
            <div>
                <label>UpperCasee</label>
                <input
                type='checkbox'
                checked={uppercase}
                onChange={()=>setUppercase(!uppercase)}/>

            </div><br/>
            <div>
            <label>LowerCase</label>
            <input
            type='checkbox'
            checked={lowercase}
            onChange={()=> setLowercase(!lowercase)}/>
            </div>
             <div>
            <label>Numbers</label>
            <input
            type='checkbox'
            checked={numbers}
            onChange={()=> setNumbers(!numbers)}/>
            </div>
             <div>
            <label>Symbols</label>
            <input
            type='checkbox'
            checked={symbols}
            onChange={()=> setSymbols(!symbols)}/>
            </div>
            <div>
                <button onClick={generatePassword}>
                    <FaKey/>Generate Password

                </button>
            </div>
        </div>
    </div>
  )
}

export default Project1