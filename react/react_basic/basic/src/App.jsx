import { useEffect, useState } from 'react'
import './App.css'

function App() {
  return(
    <div>
      <Postcomponent name={"messi"}
      description={"wortld number 1 player "}
      num={"10"}
      
      />

      <Postcomponent name={"ronaldo"}
      description={"wortld number 1 player "}
      num="07"
      
      />

      <Togglemessage/>

      <Togglemessage/>

      <Togglemessage/>

      <Creating_post/>
      
      <div>
        <Useeffect_hook/>
        <Useeffect_hook1/>
      </div>

      <div>
        <Main_cleanup/>

        <Children1/>
      </div>

      <div>
        <Todomain/>
      </div>
    </div>
  )
  
  
}

function Postcomponent({name,description,num}){
  const style={backgroundColor:"purple",color:"black"}

  return (
    <div >
      <div style={{backgroundColor:'black',color:"while"}}>
        sample post creation in the react and using the css 
      </div>
      <div style={style}>
        sample post creation in the react and using the css 
        <img src='data:image/jpeg;base64,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' style={{width:60,height:50}}></img>
      </div>
      <div>
        <p> name of the player {name}</p>
        <br></br>
        {/*  it is a conditional rendering */}
        {num && num!="07"&&<p>{description}</p>}
        <br></br>
        {num && <p> player jessy number {num}</p>}
      </div>
    </div>
  )
}


function Togglemessage(){
  const [toggle1,settoggle]=useState(true)

   function toggle_operation(){
    settoggle(!toggle1)
   }


  return(
    <div>
      <button onClick={toggle_operation}>toggle button</button>
      {toggle1 && <p> press the button to toggle the datas</p>}

    </div>
  )
}

function Creating_post(){
  const [post,setpost]=useState([{name:"neymar",
      description:"magician",
      num:"11"}]);
  const updated_post = post.map((u, index) => (
  <Postcomponent 
    key={index}
    name={u.name}
    description={u.description}
    num={u.num}
  />
));

  function addpost(){
    setpost([...updated_post,{
      name:"neymar",
      description:"magician",
      num:"11"
    }])

  }
  
  return(
    <div>
      <div>
        <button onClick={addpost}>addpost</button>
        <div>
          {updated_post}
        </div>
      </div>
      
    </div>
  )
}

const Useeffect_hook=()=>{
  const [count,setcount]=useState(0);

  function increment(){
    setcount((pre)=>pre+1)
  }
  useEffect(
    function(){ 
      setInterval(increment,500)},[])

  return( 
    <div>
      {count}
    </div>
  )

}

const Useeffect_hook1=()=>{
  const [currentTab,SetCurrentTab]=useState(1)
  const [tab,settab]=useState({})
  const [loader,setloader]=useState(false)
  useEffect(
    ()=>{
      setloader(false)

        async function fetchdata(){
          let res=await fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab)
          const json=await res.json()
          setloader(true)
          settab(json)
        }
        fetchdata()

    },[currentTab]
  )
  return(
    <div>
      <button onClick={()=>SetCurrentTab(1)} style={{color:currentTab==1?"red":"black"}}>todo 1</button>
      <button onClick={()=>SetCurrentTab(2)} style={{color:currentTab==2?"red":"black"}}>todo 2</button>
      <button onClick={()=>SetCurrentTab(3)} style={{color:currentTab==3?"red":"black"}}>todo 3</button>
      <button onClick={()=>SetCurrentTab(4)} style={{color:currentTab==4?"red":"black"}}>todo 4</button>
      {loader?  tab.title:"..loading"}

    </div>
  )


}
const Main_cleanup = () => {
  const [check, setcheck] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setcheck(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {check && <Cleanup />}
    </>
  );
};

const Cleanup = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const clock = setInterval(() => {
      console.log("it is the cleanup check");
      setcount(re => re + 1);
    }, 1000);
    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <div>
      <p>{count} seconds elapsed</p>
    </div>
  );
};

const Children1=()=>{

  return(
    <>
     <Cart>
        <div>
          <h1>hi its by the children </h1>
          <input type='text'/>
        </div>
        
     </Cart>
     <Cart>
        <div>
          <h1>
            adding similar style througt the cart
          </h1>
        </div>
     </Cart>
       
    </>
  )

}

const Cart=({children})=>{
  return(
    <div style={{border:"1px solid purple ",padding:"20px",margin:"20px"}}>
      {children}

    </div>
  )

}

const Todomain=()=>{
  return(
    <div>
      {
        [<Todo key={1} title={"messi"} profession={"football"} best={true}/>,<Todo key={2} title={"zlatan"} profession={"football"} best={false}/>]
      }
    </div>
  )
}
const Todo=({title,profession,best})=>{
  return(
    <div>
      {title} - {profession} - {best?"he is the best ":"he is good player "}
    </div>
  )

}
export default App
