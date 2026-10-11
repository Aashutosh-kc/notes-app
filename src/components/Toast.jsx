import './Toast.css'
import {CircleCheck,CircleAlert} from 'lucide-react'
export default function Toast({message,type}){
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
