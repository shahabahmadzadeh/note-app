import "./App.css";
import AddNewNote from "./components/AddNewNote";
function App() {
  return (
    <div>
      <div className="note-header">header</div>
      <div className="note-app">
        <AddNewNote />
        <div className="note-container">note list</div>
      </div>
    </div>
  );
}

export default App;
