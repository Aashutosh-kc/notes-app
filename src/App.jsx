import {  useState } from 'react';
import AddNotes from './components/AddNotes.jsx';
import AllNotes from './components/AllNotes.jsx';
function App(){
  const [notes, setNotes] = useState([]);

  function removeNote(id){
    setNotes((prev) => prev.filter((note) => (note.id ===! id)));
  }
  return(
  <>
  <AddNotes setNotes={setNotes} />
  <AllNotes notes={notes}  removeNote={removeNote}/>
  </>
)
}
export default App;