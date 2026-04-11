import './AddNotes.css';
import { useState} from 'react';
function AddNotes({setNotes}){
	const [input,setInput] = useState('');

	function handleSubmit(){
		if (input === '')
			return ;
		const newNote = {
			id : Date.now(),
			value : input
		}
		setNotes((prev) => [...prev ,newNote]);
		setInput('');
	}
	return (
	<div className = "add-notes">
		<input type="text" placeholder="e.g Need to watch this movie" value={input} onChange={(e) => setInput(e.target.value)} />
		<button className="add-btn" onClick={handleSubmit}>
			Add
		</button>
	</div>
	)
}
export default AddNotes;