import { useState } from 'react'
import useFetch  from "./Hooks/usefetch.js"
import {useFetch_url} from './Hooks/usefetch_url.js';
import { usePrev } from './Hooks/usePrev.js';
import { useDebounce } from './Hooks/useDebounce.js';
import './App.css'

function useIncrement(){
  const [count,setcount]=useState(0);
  function inc(){
    setcount(count+1)
  }
  return{
    count:count,
    inc:inc
  }

}

function App() {

  return (
    <>
      <div>
      <Counter/>
      </div>
      <div>
      <Usefetch_hook/>
      </div>
      <div>
      <Usefetch_hook1/>
      </div>
      <div>
        <Usepre/>
      </div>
      <div>
        <Usedebounced/>
      </div>
    </>
  )
}

const Counter=()=>{
  const {count,inc}=useIncrement();

  return(
    <>
      <p>increment value {count}</p>
      <button onClick={inc}>increment button</button>

    </>
  )
}

const Usefetch_hook=()=>{
  const post=useFetch()
  return(
    <>
    { JSON.stringify(post)}
     {post.title}
    </>
  )
}

const Usefetch_hook1=()=>{
  const [change,setchange]=useState(1);
  const {post_url,loading}=useFetch_url("https://jsonplaceholder.typicode.com/todos/"+change)
  return(
    <>
    <button onClick={()=>{setchange(1)}}>content 1 </button>
    <button onClick={()=>{setchange(2)}}>content 2 </button>
    <button onClick={()=>{setchange(3)}}>content 3</button>
    { loading ? JSON.stringify(post_url):"...loading"}
    <br/>
    <br/>
    { loading ? JSON.stringify(post_url.title):"...loading"}
    </>
  )
}


const Usepre=()=>{
  const [state,setstate]=useState(0)
  let usepre=usePrev(state);
  return(
    <>
     {state}
     <br/>
     <button onClick={()=>{setstate((pre)=>{return pre+1})}}>check the pre hook</button>
     <p>prev value {usepre}</p>
    </>
  )
}

const Usedebounced=()=>{
  function senddatatobackend(){
    fetch("api.amazon.com/search/")
  }
  const debounce=useDebounce(senddatatobackend)
  return(
    <>
    <input type='text' onChange={debounce}></input>
    </>
  )
}

export default App
