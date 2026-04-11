import {  useState } from 'react';
import AddNotes from './components/AddNotes.jsx';
import AllNotes from './components/AllNotes.jsx';
import './App.css'
function App(){
  const [notes, setNotes] = useState([]);

  function removeNote(id){
    setNotes((prev) => prev.filter((note) => (note.id ===! id)));
  }
  return(
  <>
  <h1>Notes</h1>
  <AddNotes setNotes={setNotes} />
  <AllNotes notes={notes}  removeNote={removeNote}/>
  </>
)
}
export default App;