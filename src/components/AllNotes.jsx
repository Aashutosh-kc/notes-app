import './AllNotes.css';
import { useState } from 'react';

function AllNotes({ notes, removeNote, editNote }) {
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState('');

  function startEdit(note) {
    setEditingId(note.id);
    setDraft(note.value);
  }

  function saveEdit(id) {
    editNote(id, draft);
    setEditingId(null);
  }

  return (
    <ul className="all-notes">
      {notes.length === 0 && <p>No notes yet.</p>}
      {notes.map((note) => (
        <li key={note.id}>
          {editingId === note.id ? (
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
          ) : (
            <span>{note.value}</span>
          )}

          <div className="all-btn">
            {editingId === note.id ? (
              <button className="save-btn" onClick={() => saveEdit(note.id)}>
                Save
              </button>
            ) : (
              <button className="edit-btn" onClick={() => startEdit(note)}>
                Edit
              </button>
            )}
            <button className="delete-btn" onClick={() => removeNote(note.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default AllNotes;