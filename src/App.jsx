import { useEffect, useState, useRef, use } from "react";
import AddNotes from "./components/AddNotes.jsx";
import AllNotes from "./components/AllNotes.jsx";
import Toast from "./components/Toast.jsx";
import Header from "./components/Header.jsx";
import "./App.css";
import { User } from "lucide-react";
function App() {

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  const [toast, setToast] = useState(null);
  const toastCount =  useRef(1);
  const palette = ["#f97a5c", "#f5b942", "#a78bfa", "#38bdf8", "#a3e635"];
  function showToast(message, type, duration = 3000 ) {
    toastCount.current += 1;
    setToast({id: toastCount.current, message, type ,duration });
  }

  function removeNote(id) {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    showToast("Note deleted sucessfully.", "success");
  }

  function editNote(id, newValue) {
    if (newValue.trim() === "") {
      showToast("Note can't be empty.", "error");
      return;
    }
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, value: newValue } : n)),
    );
    showToast("Note edited sucessfully.", "success");
  }
  function setColor(id,newColor){
    setNotes((prev) => prev.map((n)=> (n.id === id? {...n, bgColor: newColor}: n)));
  }
  function setPin(id, value) {
    setNotes((prev) => {
      const updatedNotes = prev.map((n) =>
        n.id === id ? { ...n, pinned: value } : n,
      );
      updatedNotes.sort((a, b) => b.pinned - a.pinned);
      return updatedNotes;
    });
    if (value) {
      showToast("Note Pinned sucessfully.", "success");
    } else {
      showToast("Note Unpinned sucessfully.", "success");
    }
  }
  useEffect(() => {
    try {
      localStorage.setItem("notes", JSON.stringify(notes));
    } catch (error) {
      showToast("Failed to save notes.", "Error");
    }
  }, [notes]);

  return (
    <>
      <Header appName="Notes" repoName="notes-app" />
      <h1>Notes</h1>
      <p className="page-subtitle">Your thoughts, organized in one place.</p>
      <AddNotes setNotes={setNotes} showToast={showToast} palette={palette} />
      <AllNotes
        notes={notes}
        removeNote={removeNote}
        editNote={editNote}
        setPin={setPin}
        palette={palette}
        setColor={setColor}
      />
      {toast && <Toast setToast={setToast} id={toast.id} message={toast.message} type={toast.type} duration={toast.duration}/>}
    </>
  );
}
export default App;
