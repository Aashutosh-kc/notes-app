import './AddNotes.css';
import { useState, useEffect } from 'react';

function AddNotes({ setNotes }) {
  const [notes, setLocalNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [{ id: 1, value: "Log three movies in letterboxd" }];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function handleSubmit() {
    if (input === '') return;
    const newNote = { id: Date.now(), value: input };
    setLocalNotes((prev) => [...prev, newNote]);
    setInput('');
  }

  return (
    <div className="add-notes">
      <input
        type="text"
        placeholder="e.g Need to watch this movie"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add-btn" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default AddNotes;