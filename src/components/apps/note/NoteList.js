import React from 'react';
import './note.css';

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="note-list">
      {notes.map(note => (
        <div key={note.id} className="note-item">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <div className="note-actions">
            <button onClick={() => onEdit(note)}>Edit</button>
            <button onClick={() => onDelete(note.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
