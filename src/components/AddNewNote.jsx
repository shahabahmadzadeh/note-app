function AddNewNote() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input type="text" className="text-field" placeholder="" />
        <input type="text" className="text-field" placeholder="" />
        <button className="btn btn--primary">Add Note</button>
      </form>
    </div>
  );
}

export default AddNewNote;
