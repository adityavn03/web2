import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toggle_process/>
      
    </>
  )
}
const Toggle_process=()=>{
    const [toggle,settoggle]=useState("on")

  return(
    <>
      <Message toggle={toggle} />
      <Togglemessage settoggle={settoggle} toggle={toggle} />
    </>
  )

}

const Togglemessage=({settoggle,toggle})=>{
  function toggle_function(){
    settoggle(toggle=toggle=="on"?"off":"on")
  }
  return(
    <>
    <button onClick={toggle_function}>toggle_the_state</button>
     

    </>
  )

}
const Message=({toggle})=>{
  return(
    <div>
      light {toggle}
    </div>
  )

}
export default App
