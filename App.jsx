
import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  // Add and Update Note
  function saveNote() {
    if (note === "") {
      alert("Please enter a note");
      return;
    }

    if (editIndex === -1) {
      setNotes([...notes, note]);
    } else {
      let updatedNotes = [...notes];
      updatedNotes[editIndex] = note;
      setNotes(updatedNotes);
      setEditIndex(-1);
    }

    setNote("");
  }

  // Edit Note
  function editNote(index) {
    setNote(notes[index]);
    setEditIndex(index);
  }

  // Delete Note
  function deleteNote(index) {
    let updatedNotes = notes.filter((item, i) => i !== index);
    setNotes(updatedNotes);

    if (editIndex === index) {
      setNote("");
      setEditIndex(-1);
    }
  }

  return (
    <div className="container">
      <h1>My Notes App</h1>

      <input
        type="text"
        placeholder="Enter your note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={saveNote}>
        {editIndex === -1 ? "Add Note" : "Update Note"}
      </button>

      <h2>My Notes</h2>

      {notes.map((item, index) => (
        <div className="note" key={index}>
          <span>{item}</span>

          <div>
            <button onClick={() => editNote(index)}>Edit</button>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
