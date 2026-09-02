import './AllNotes.css';
import { useState } from 'react';
import { Trash2, Pencil, Save } from 'lucide-react';

function AllNotes({ notes, removeNote, editNote }) {
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState('');

  const palette = ['#f97a5c', '#f5b942', '#a78bfa', '#38bdf8', '#a3e635'];

  function formattedDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }

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
        <li key={note.id} style={{ background: palette[note.id % palette.length] }}>
          {editingId === note.id ? (
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => { e.key === "Enter" && saveEdit(note.id) }}
            />
          ) : (
            <span>{note.value}</span>
          )}

          <div className="note-footer">
            <span className="note-date">{formattedDate(note.id)}</span>
            <div className="all-btn">
              {editingId === note.id ? (
                <button className="save-btn" onClick={() => saveEdit(note.id)}>
                  <Save size={16} />
                </button>
              ) : (
                <button className="edit-btn" onClick={() => startEdit(note)}>
                  <Pencil size={16} />
                </button>
              )}
              <button className="delete-btn" onClick={() => removeNote(note.id)}>
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default AllNotes;