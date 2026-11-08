import "./AllNotes.css";

import { useState } from "react";

import { Trash2, Pencil, Save, Pin,Palette } from "lucide-react";

function AllNotes({ notes, removeNote, editNote, setPin,palette,setColor }) {
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState("");


  function formattedDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
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
        <li
          key={note.id}
          className={note.pinned ? "note pinned" : "note"}
          style={{ background: note.bgColor }}
        >
          <div className="top-row">
            {editingId === note.id ? (
              <textarea
                className="note-edit-input"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    saveEdit(note.id);
                  }
                }}
                rows={1}
                ref={(ta) => {
                  if (ta) {
                    ta.style.height = "auto";
                    ta.style.height = ta.scrollHeight + "px";
                  }
                }}
              />
            ) : (
              <span>{note.value}</span>
            )}
            <button
              className={note.pinned ? "pin-btn pinned-btn" : "pin-btn"}
              onClick={() => setPin(note.id, !note.pinned)}
            >
              <Pin size={16} />
            </button>
          </div>

          <div className="note-footer">
            <span className="note-date">{formattedDate(note.id)}</span>

            <div className="all-btn">
            <div className="palette-btn">
              <Palette />
              <div className="color-selection">
                {palette.map((color,index)=>
                <div key={index} 
                  className="circle" 
                  style={{background: color}} 
                  onClick={()=>setColor(note.id,color)}>
                </div>)}
              </div>
            </div>
              {editingId === note.id ? (
                <button className="save-btn" onClick={() => saveEdit(note.id)}>
                  <Save size={16} />
                </button>
              ) : (
                <button className="edit-btn" onClick={() => startEdit(note)}>
                  <Pencil size={16} />
                </button>
              )}

              <button
                className="delete-btn"
                onClick={() => removeNote(note.id)}
              >
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
