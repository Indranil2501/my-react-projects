import React, { useState, useEffect } from 'react';
import './note.css';

const NoteEditor = ({ currentNote, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [currentNote]);

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      onSave({ id: currentNote?.id, title, content });
    }
  };

  return (
    <div className="note-editor">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default NoteEditor;
