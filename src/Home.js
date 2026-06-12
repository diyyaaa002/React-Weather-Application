import React,{useNavigate} from 'react-router-dom'

function Home() {
    let Navigate=useNavigate()
  return (
    <div>Home
        <button
        onClick={Navigate('/About')}>About</button>
    </div>
  )
}

export default Home