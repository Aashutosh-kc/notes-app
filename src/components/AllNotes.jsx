import './AllNotes.css';
function AllNotes({notes,removeNote}){

	return(
	<ul className = "all-notes">
		{notes.map((note) => <li key={note.id}><p>{note.value}</p><button className="delete-btn" onClick={() => removeNote(note.id)}>X</button></li>)}
	</ul>
	)
}
export default AllNotes;