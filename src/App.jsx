import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
function App() {
  const [notse, setNotse] = useState([]);
  function handleDelete(id) {
    setNotse((prevNote) => prevNote.filter((n) => n.id !== id));
  }
  return (
    <div>
      <div className="note-header">header</div>
      <div className="note-app">
        <AddNewNote setNotse={setNotse} />
        <div className="note-container">
          <NoteList notse={notse} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
