function NoteList({ notse }) {
  return (
    <div className="note-list">
      {notse.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </div>
  );
}

function NoteItem({ note }) {
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button className="trash">
            <img src="../../public/delete.png" />
          </button>
          <input type="checkbox" />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", option)}
      </div>
    </div>
  );
}

export default NoteList;
