function NoteList({ notse, onDelete, onComplete }) {
  return (
    <div className="note-list">
      {notse.map((note) => (
        <NoteItem
          note={note}
          key={note.id}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}

function NoteItem({ note, onDelete, onComplete }) {
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`note-item ${note.complete ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)} className="trash">
            <img src="../../public/delete.png" />
          </button>
          <input
            onChange={onComplete}
            value={note.id}
            name={note.id}
            checked={note.Complete}
            type="checkbox"
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", option)}
      </div>
    </div>
  );
}

export default NoteList;
