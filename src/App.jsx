import {  useEffect, useState,useRef } from 'react';
import AddNotes from './components/AddNotes.jsx';
import AllNotes from './components/AllNotes.jsx';
import Toast from './components/Toast.jsx';
import './App.css'
function App(){
  

  const [notes, setNotes] = useState(()=>{
  const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) :[];
  });
  const [toast,setToast ] = useState(null);
  const toastTimer= useRef(null);

  function showToast(message,type) {
    clearInterval(toastTimer.current);
    setToast({message,type});
    toastTimer.current= setTimeout(()=> {
    setToast(null)
    },3000)
  }

  function removeNote(id){
    setNotes((prev) => prev.filter((note) => (note.id !== id)));
    showToast("Note deleted sucessfully.","success")
  }

  function editNote(id,newValue){
    if (newValue.trim() === ""){
      showToast("Note can't be empty.","error")
      return;
    }
    setNotes((prev) => prev.map((n) => n.id === id?{...n, value : newValue}: n));
    showToast("Note edited sucessfully.","success")
  }

  function setPin(id,value){
    setNotes((prev) => {
      const updatedNotes = prev.map((n) => n.id === id?{...n,pinned: value}: n);
      updatedNotes.sort((a,b) => b.pinned - a.pinned)
      return updatedNotes;
    });
    showToast("Note Pinned sucessfully.","success")
  }
  useEffect(()=>{
    try{
      localStorage.setItem('notes',JSON.stringify(notes));
    }
    catch(error){
      showToast("Failed to save notes.","Error");
    }
  },[notes])

  return(
  <>
  <h1>Notes</h1>
  <AddNotes setNotes={setNotes} showToast={showToast}/>
  <AllNotes notes={notes}  removeNote={removeNote} editNote={editNote} setPin={setPin}/>
  {toast && <Toast message={toast.message} type={toast.type} />}
  </>
)
}
export default App;