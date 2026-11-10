import './AddNotes.css';
import { useState} from 'react';
function AddNotes({setNotes,showToast,palette}){
	const [input,setInput] = useState('');
	
	function handleSubmit(){
		if (input.trim() === '')
		{
			showToast("Note can't be empty","error");
			return ;
		}
			const now = Date.now();
		const newNote = {
			id : now,
			value : input,
			pinned: false,
			bgColor: palette[now % palette.length]
		}
		setNotes((prev) => [...prev ,newNote]);
		setInput('');
		showToast(1.1,"Note created sucessfully","success");
	}
	return (
	<div className = "add-notes">
		<input type="text" placeholder="e.g. Need to watch this movie" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e)=>{e.key=== "Enter" && handleSubmit()}}/>
		<button className="add-btn" onClick={handleSubmit}>
			Add
		</button>
	</div>
	)
}
export default AddNotes;