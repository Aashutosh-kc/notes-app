import './AllNotes.css';
import { useState} from 'react';
function AllNotes({notes,removeNote,editNote}){

	const [editValue,setEditValue] = useState('');
	const [editId, setEditId] = useState(null);

	function handleEdit(note){
		setEditValue(note.value);
		setEditId(note.id);
	}

	function handleSave(id,value){
		editNote(id,value);
		setEditId(null);
	}
	return(
	<ul className = "all-notes">
		{notes.map((note) => <li key={note.id}>
			{note.id === editId?<input value={editValue} onChange={(e) => setEditValue(e.target.value)} />
			:<p>{note.value}</p>}

			<div className="all-btn">
			{note.id === editId?<button className="save-btn" onClick={() => handleSave(note.id, editValue)}>Save</button>
			:<button className="edit-btn" onClick={() => handleEdit(note)}>Edit</button>}
			
			<button className="delete-btn" onClick={() => removeNote(note.id)}>X</button>
			</div>
		</li>)}
	</ul>
	)
}
export default AllNotes;