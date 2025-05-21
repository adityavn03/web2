import { useState,useRef } from 'react'
import {BrowserRouter,Routes,Route, Link,useNavigate, Outlet} from 'react-router-dom'

import './App.css'
const Student=()=>{
  return(
    <div>
      hello it is student router
    </div>
   )
}
const Admin=()=>{
  const navigate=useNavigate()

   const usenagivate_hook=()=>{
    navigate("/landing");
    
  }
  return(
    <div>
      <button onClick={usenagivate_hook} >landing_page</button>
      hello it is Admin router
    </div>
   )
}

const Landing=()=>{
  return(
    
    <div>

      it is landing page router 
    </div>
   )
}

const Useref=()=>{
  const [count,setcount]=useState(0);
  const ref=useRef({});
  function start(){
    let inc=setInterval(()=>setcount((pre)=>pre+=1),1000)
    ref.current.inc=inc



  }
  function stop(){
    clearInterval(ref.current.inc)

  }
  function restart(){
    clearInterval(ref.current.inc);
    setcount(0)
  }
  return(
    <>
    <div> {count}</div>
    <button onClick={start}>start</button>
    <button onClick={stop}>sstop</button>
    <button onClick={restart}>restart</button>
    </>
  )


}

function Rollup(){
  return(
    <>
    </>
  )
}



function App() {
  return (
    <>
     {"|| it will  rendder in all three compounent in the web page ||"}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/landing" element={<Landing/>}></Route>
          <Route path="/student" element={<Student/>}/>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path='/useref' element={<Useref/>}></Route>
          <Route path='rollup' element={<Rollup/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
      
    </>
  )
}

const Layout=()=>{
  return(
    <div style={{backgroundColor:"gray"}}>
      <Header/>
      <div style={{backgroundColor:"white",color:'black'}}>
        <Outlet/>
      </div>
      <div style={{backgroundColor:"red"}}>
        footer
      </div>
    </div>
  )
}
const Header=()=>{
  return(
    <div>
      <Link to="/student">student</Link>||
      <Link to="/admin">admin</Link>||
      <Link to="/landing">landing_page</Link>||
      <Link to="/useref">useref</Link>||
      <Link to="/rollup">rollup</Link>

    </div>
  )
}

export default App
