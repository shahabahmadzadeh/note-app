import { useState } from "react";

function AddNewNote({ setNotse }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return null;
    const newNote = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toISOString(),
    };
    // update notse
    setNotse((prevNotse) => [...prevNotse, newNote]);
    setTitle(""), setDescription("");
  };
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onInput={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="add title"
        />
        <input
          value={description}
          onInput={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="add description"
        />
        <button className="btn btn--primary">Add Note</button>
      </form>
    </div>
  );
}

export default AddNewNote;
