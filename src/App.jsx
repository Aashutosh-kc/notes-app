import {  useEffect, useState } from 'react';
import AddNotes from './components/AddNotes.jsx';
import AllNotes from './components/AllNotes.jsx';
import './App.css'
function App(){
  
  const [notes, setNotes] = useState(()=>{
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) :[];
  });

  function removeNote(id){
    setNotes((prev) => prev.filter((note) => (note.id !== id)));
  }

  function editNote(id,newValue){
    setNotes((prev) => prev.map((n) => n.id === id?{...n, value : newValue}: n));
  }
  function setPin(id,value){
    setNotes((prev) => {
      const updatedNotes = prev.map((n) => n.id === id?{...n,pinned: value}: n);
      updatedNotes.sort((a,b) => b.pinned - a.pinned)
      return updatedNotes;
    });
  }
  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes));
  },[notes])

  return(
  <>
  <h1>Notes</h1>
  <AddNotes setNotes={setNotes} />
  <AllNotes notes={notes}  removeNote={removeNote} editNote={editNote} setPin={setPin}/>
  </>
)
}
export default App;