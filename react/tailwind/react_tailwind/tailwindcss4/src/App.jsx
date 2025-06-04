import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './component/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Backgroundcolour/>
        <Flex/>
        <Grid/>

      </div>

      <div>
        <Responsiveness/>
      </div>
      <div>
        <Otpgenearator number={10}/>
      </div>
      <div>
          <Signup/>
      </div>

    </>    
  )
}

const Backgroundcolour=()=>{

  return(
    <>
    <h1 className='bg-red-300'>it is background color </h1> 
    </>
  )
}

const Flex=()=>{
  return(
    <>
      <div className='flex justify-between'>
        <div>
          child 1

        </div>
          child 2

        <div>
          child 3
          
        </div>

        <div>
          child 4
          
        </div>


      </div>
    </>
  )
}

const Grid=()=>{
  return(
    <div>
       <div className='grid grid-cols-12'>{/*set the column width with the 12 and use in the child to allocate the width of the web page */}
          <div className='bg-red-300 col-span-4'>{/* in here the particular child get the size of 4 cloumn and if it does not given then it said to be the one but it does not exclude the parents column size*/}
             class 1
          </div>

          <div className='bg-blue-300 col-span-6'>{/* it takes the 6 column */}
             class 2
          </div>

          <div className='bg-yellow-300 col-span-2'>
             class 3
          </div>
       </div>
    </div>
  )
}

const Responsiveness =()=>{
  return(
    <div>
      <br/>
      <div className='grid grid-cols-12'>
        <div className=' col-span-12 sm:col-span-5 bg-red-300 rounded'>
          class 1
        </div>

        <div className='col-span-12 sm:col-span-5 bg-yellow-300 '>
          class 2
        </div>

        <div className='col-span-12 sm:col-span-2 bg-blue-300'>
          class 3
        </div>

      </div>

    </div>
  )
}

const Signup=()=>{


  return(
    <>

    <div >
     <Button disable={true}  >Sign up</Button>
     </div>
      
    </>
  )
}


//opt generator
const Otpgenearator=({number})=>{
  const [disable,setdisable]=useState(true);
  const ref=useRef([])


  return(
    <div>
      <div className='flex justify-center'>
        {Array(number).fill(1).map((x,index)=><Subotp key={index} reference={(e)=>ref.current[index]=e} ondone={()=>{
          if(index+1!=number){ref.current[index+1].focus()}}} goback={()=>{if(index!==0){ref.current[index-1].focus()}}} />)}
      </div>




    </div>  
  )
}
const Subotp=({reference,ondone,goback})=>{
  const [inputbox,setinput]=useState("")
      return(
        <div>
          <input value={inputbox}  ref={reference} onKeyUp={(e)=>{if(e.key=="Backspace"){
            goback()
          }}}
          onChange={(e)=>{const val=e.target.value
            let arr=["1","2","3","4","5","6","7","8","9"]
            if(arr.includes(val)){
              setinput(val);
              ondone()
            }
            else{

            }
          }} className='m-1 type-text w-[40px] h-[50px] rounded-2xl bg-blue-500 outline-none px-4 text-white'></input>
        </div>
      )
}
export default App
