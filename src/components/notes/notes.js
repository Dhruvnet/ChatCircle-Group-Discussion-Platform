// notes.js
import React, { useState } from 'react';
import './notes.css';

function Notes() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    const newNote = {
      id: Date.now(), // Unique ID based on current timestamp
      text: text,
      createdAt: new Date().toLocaleString(), // Date and time of note creation
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Keep a Track Of What You Have Learned So Far</h1>
      <br />
      <h3>Space provided below is for taking multiple notes</h3>
      <br />
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

function NoteForm({ addNote }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addNote(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your note"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

function NoteList({ notes, deleteNote }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

function Note({ note, deleteNote }) {
  return (
    <div className="note">
      <div>{note.text}</div>
      <div className="note-info">
        <span>{note.createdAt}</span>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Notes;
