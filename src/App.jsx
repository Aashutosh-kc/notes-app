import {  useState } from 'react';
import AddNotes from './components/AddNotes.jsx';
import AllNotes from './components/AllNotes.jsx';
function App(){
  const [notes, setNotes] = useState([]);

  return(
  <>
  <AddNotes setNotes={setNotes}/>
  <AllNotes notes={notes} />
  </>
)
}
export default App;