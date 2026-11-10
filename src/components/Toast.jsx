import './Toast.css'
import { useRef,useEffect } from 'react';
import {CircleCheck,CircleAlert} from 'lucide-react'
export default function Toast({setToast,id,message,type,duration}){
      const toastTimer = useRef(null);

    useEffect(()=>{
        toastTimer.current = setTimeout(()=>{
        setToast(null);
        },duration)
        return () => clearTimeout(toastTimer.current)
    },[id])

    return(
    <div className={`toast toast-${type}`}>
        {type === "success"? <CircleCheck size={32}/>:<CircleAlert size={32}/>}
        <div className='toast-info'>
        <h3>{type === "success"?"Success" : "Error"}</h3>
        <p>{message}</p>
        </div>
    </div>
    )
}
