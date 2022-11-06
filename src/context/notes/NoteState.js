import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {

  const notesInitial = [
    {
      "_id": "634063634a3febdf1781d6c5",
      "user": "633f1e00c358cefdfe6e72cc",
      "title": "Be Master of React Js",
      "description": "React js is a powerfull library of javascript to build the user interface and single page application and many more...",
      "tag": "General",
      "date": "2022-10-07T17:35:31.163Z",
      "__v": 0
    },
    {
      "_id": "634ebfeaa190ce95e759107e",
      "user": "633f1e00c358cefdfe6e72cc",
      "title": "Javascript",
      "description": "Javascript is the powerful language of the internet now a days.",
      "tag": "Programing",
      "date": "2022-10-18T15:02:02.011Z",
      "__v": 0
    },
    {
      "_id": "634063634a3febdf1781d6c5ew",
      "user": "633f1e00c358cefdfe6e72cc",
      "title": "Be Master of React Js",
      "description": "React js is a powerfull library of javascript to build the user interface and single page application and many more...",
      "tag": "General",
      "date": "2022-10-07T17:35:31.163Z",
      "__v": 0
    },
    {
      "_id": "634ebfeaa190ce95e759107edf",
      "user": "633f1e00c358cefdfe6e72cc",
      "title": "Javascript",
      "description": "Javascript is the powerful language of the internet now a days.",
      "tag": "Programing",
      "date": "2022-10-18T15:02:02.011Z",
      "__v": 0
    },
    {
      "_id": "634063634a3febdf1781d6c5vv",
      "user": "633f1e00c358cefdfe6e72cc",
      "title": "Be Master of React Js",
      "description": "React js is a powerfull library of javascript to build the user interface and single page application and many more...",
      "tag": "General",
      "date": "2022-10-07T17:35:31.163Z",
      "__v": 0
    },
    {
      "_id": "634ebfeaa190ce95e759107ehh",
      "user": "633f1e00c358cefdfe6e72cc",
      "title": "Javascript",
      "description": "Javascript is the powerful language of the internet now a days.",
      "tag": "Programing",
      "date": "2022-10-18T15:02:02.011Z",
      "__v": 0
    },
    {
      "_id": "634063634a3febdf1781d6c5bb",
      "user": "633f1e00c358cefdfe6e72cc",
      "title": "Be Master of React Js",
      "description": "React js is a powerfull library of javascript to build the user interface and single page application and many more...",
      "tag": "General",
      "date": "2022-10-07T17:35:31.163Z",
      "__v": 0
    },
    {
      "_id": "634ebfeaa190ce95e759107enn",
      "user": "633f1e00c358cefdfe6e72cc",
      "title": "Javascript",
      "description": "Javascript is the powerful language of the internet now a days.",
      "tag": "Programing",
      "date": "2022-10-18T15:02:02.011Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a note
  const addNote = (title, description, tag) => {
    const note = {
      "_id": "634ebfeaa190ce95e759107enn",
      "user": "633f1e00c358cefdfe6e72cc",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-10-18T15:02:02.011Z",
      "__v": 0
    }
    setNotes(notes.concat(note));
  }

  // Delete a note
  const deleteNote = (noteId) => {
    const newNotes = notes.filter((note) => {return note._id !== noteId });
    setNotes(newNotes);
  }

  // Edit a note
  const editNote = () => {

  }

  
  return (
    <noteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote}}>{props.children}</noteContext.Provider>
  );
};

export default NoteState;
