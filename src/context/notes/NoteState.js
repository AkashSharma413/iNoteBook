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
    console.log(data);
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
    const result = response.json();

    const note = {
      _id: "634ebfeaa190ce95e759107enn",
      user: "633f1e00c358cefdfe6e72cc",
      title: title,
      description: description,
      tag: tag,
      date: "2022-10-18T15:02:02.011Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // DELETE A NOTE //
  const deleteNote = (noteId) => {
    const newNotes = notes.filter((note) => {
      return note._id !== noteId;
    });
    setNotes(newNotes);
  };

  // EDIT A NOTE //
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzZjFlMDBjMzU4Y2VmZGZlNmU3MmNjIn0sImlhdCI6MTY2NTA4MDgzMn0.gkrpzL6vsOEFYtTvxTqKFzz4zfQJjCYgQqHvRgzkF70",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const result = response.json();

    // logic to edit a note
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id == id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
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
