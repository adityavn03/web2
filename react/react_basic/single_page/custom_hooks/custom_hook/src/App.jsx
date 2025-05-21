import { useState } from 'react'
import useFetch  from "./Hooks/usefetch.js"
import {useFetch_url} from './Hooks/usefetch_url.js';

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
  const post=useFetch_url("https://jsonplaceholder.typicode.com/todos/2")
  return(
    <>
    { JSON.stringify(post)}
     {post.title}
    </>
  )
}

export default App
