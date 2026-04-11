import './AllNotes.css';
function AllNotes({notes}){

	return(
	<ul className = "all-notes">
		{notes.map((note) => <li key={note.id}><p>{note.value}</p><button className="delete-btn">X</button></li>)}
	</ul>
	)
}
export default AllNotes;