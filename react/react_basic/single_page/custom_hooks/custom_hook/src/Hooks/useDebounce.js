import { useEffect, useRef, useState } from "react";

export const useDebounce=(originfn)=>{
    const ref=useRef();
    const fn=()=>{
        clearTimeout(ref.current);
        ref.current=setTimeout(originfn,1000)
    }
    return fn
}
