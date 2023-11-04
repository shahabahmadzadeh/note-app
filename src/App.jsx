import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
function App() {
  const [notse, setNotse] = useState([]);
  return (
    <div>
      <div className="note-header">header</div>
      <div className="note-app">
        <AddNewNote />
        <div className="note-container">
          <NoteList />
        </div>
      </div>
    </div>
  );
}

export default App;
