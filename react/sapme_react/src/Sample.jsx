import { useState } from "react"
import { useEffect } from "react";
export default function Sample(){
    const [add,set_timer]=useState(0);
    useEffect()
    

    return(
        <>
            <button onclick={timer}>timer {add}</button>
        </>
    )
}