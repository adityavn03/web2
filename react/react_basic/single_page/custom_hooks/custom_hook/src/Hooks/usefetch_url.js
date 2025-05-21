import { useEffect, useState } from "react";

export function useFetch_url(url){
    const [post_url,setpost_url]=useState({})
    const getdata=async ()=>{
        const res=await fetch(url)
        const json=await res.json();
        setpost_url(json)
    }
    useEffect(()=>{
        getdata()
    },[])
    return post_url
}

