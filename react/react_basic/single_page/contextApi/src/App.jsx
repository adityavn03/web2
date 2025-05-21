import { useState,createContext,useContext } from 'react'
  const Bulbcontext=createContext();


function App() {
  const [toggle,settoggle]=useState("on")


  return (
    <>
      <Bulbcontext.Provider value={{toggle:toggle,settoggle:settoggle}}>
          <Toggle_process/>
      </Bulbcontext.Provider>
      
    </>
  )
}
const Toggle_process=()=>{

  return(
    <>
      <Message />
      <Togglemessage />
    </>
  )

}

const Togglemessage=()=>{
  const {toggle,settoggle}=useContext(Bulbcontext)
  function toggle_function(){
    settoggle(toggle=="on"?"off":"on")
  }
  return(
    <>
    <button onClick={toggle_function}>toggle_the_state</button>
     

    </>
  )

}
const Message=()=>{
  let {toggle}=useContext(Bulbcontext)
  return(
    <div>
      light {toggle}
    </div>
  )

}
export default App
