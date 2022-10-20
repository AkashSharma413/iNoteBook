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
    }
  ];

  const [notes, setNotes] =useState(notesInitial);
  
  return (
    <noteContext.Provider value={{notes, setNotes}}>{props.children}</noteContext.Provider>
  );
};

export default NoteState;
