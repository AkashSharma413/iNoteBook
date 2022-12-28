import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // GET ALL NOTES //
  const getAllNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzZjFlMDBjMzU4Y2VmZGZlNmU3MmNjIn0sImlhdCI6MTY2NTA4MDgzMn0.gkrpzL6vsOEFYtTvxTqKFzz4zfQJjCYgQqHvRgzkF70",
      },
    });
    const data = await response.json();
    setNotes(data);
  };

  // ADD A NOTE //
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzZjFlMDBjMzU4Y2VmZGZlNmU3MmNjIn0sImlhdCI6MTY2NTA4MDgzMn0.gkrpzL6vsOEFYtTvxTqKFzz4zfQJjCYgQqHvRgzkF70",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // DELETE A NOTE //
  const deleteNote = async (noteId) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzZjFlMDBjMzU4Y2VmZGZlNmU3MmNjIn0sImlhdCI6MTY2NTA4MDgzMn0.gkrpzL6vsOEFYtTvxTqKFzz4zfQJjCYgQqHvRgzkF70",
      },
    });
    //const result = response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== noteId;
    });
    setNotes(newNotes);
  };

  // EDIT A NOTE //
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzZjFlMDBjMzU4Y2VmZGZlNmU3MmNjIn0sImlhdCI6MTY2NTA4MDgzMn0.gkrpzL6vsOEFYtTvxTqKFzz4zfQJjCYgQqHvRgzkF70",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const result = response.json();

    // Create deep copy of notes
    const newNotes = JSON.parse(JSON.stringify(notes));
    
    // logic to edit a note
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getAllNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
