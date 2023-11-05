import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
function App() {
  const [notse, setNotse] = useState([]);
  function handleAddNote(note) {
    setNotse((prevNotse) => [...prevNotse, note]);
  }
  function handleDelete(id) {
    setNotse((prevNote) => prevNote.filter((n) => n.id !== id));
  }
  function handleComplete(e) {
    const noteId = Number(e.target.value);
    setNotse((prevNote) =>
      prevNote.map((note) =>
        note.id === noteId ? { ...note, complete: !note.complete } : note
      )
    );
  }
  return (
    <div>
      <div className="note-header">header</div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteList
            notse={notse}
            onDelete={handleDelete}
            onComplete={handleComplete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
