import React, { useState, useEffect } from 'react';
import NoteEditor from './NoteEditor';
import NoteList from './NoteList';
import './note.css';

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    // Load notes from local storage
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    // Save notes to local storage
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, { id: Date.now(), ...note }]);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => note.id === updatedNote.id ? updatedNote : note));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="note-app">
      <h1>Notes App</h1>
      <NoteEditor
        currentNote={currentNote}
        onSave={(note) => {
          if (note.id) {
            updateNote(note);
          } else {
            addNote(note);
          }
          setCurrentNote(null);
        }}
      />
      <NoteList
        notes={notes}
        onEdit={(note) => setCurrentNote(note)}
        onDelete={deleteNote}
      />
    </div>
  );
};

export default Note;
