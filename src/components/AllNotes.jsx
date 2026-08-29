import './AllNotes.css';

function AllNotes({ notes, removeNote, editNote }) {
  return (
    <div className="all-notes">
      {notes.length === 0 && <p>No notes yet.</p>}
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          <input
            type="text"
            value={note.value}
            onChange={(e) => editNote(note.id, e.target.value)}
          />
          <button onClick={() => removeNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AllNotes;