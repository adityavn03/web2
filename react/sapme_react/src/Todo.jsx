import  { useState } from 'react';
import './Todo.css'
export default function Todo(){
    let a=0;
    const [choice,setadd]=useState('off');
    const[multiplication,setmultiplication]=useState(0);
    function change(){
        setadd(choice=='on'?'off':'on')
    }
    function mul(){
        const p=prompt()
        const n=prompt()
        setmultiplication(p*n);

    }
    return(
        <div>
            <button onClick={change}>toggle pratics {choice}</button>
            <button onClick={mul}>multiplication {multiplication}</button>
            
        </div>
    )
}