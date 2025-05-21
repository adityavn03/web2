import { useEffect, useState } from "react";

function useFetch(){
    const [post,setpost]=useState({})
    const getdata=async ()=>{
        const res=await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const json=await res.json();
        setpost(json)
    }
    useEffect(()=>{
        getdata()
    },[])
    return post
}

export default useFetch;