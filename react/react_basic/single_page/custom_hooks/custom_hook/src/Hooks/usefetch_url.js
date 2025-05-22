import { useEffect, useState } from "react";

export function useFetch_url(url){
    const [loading,setloading]=useState(true);
    const [post_url,setpost_url]=useState({})
    const getdata=async ()=>{
        setloading(false);
        const res=await fetch(url)
        const json=await res.json();
        setpost_url(json)
        setloading(true)
    }
    useEffect(()=>{
        getdata()
    },[url])
    return {post_url,loading}
}

