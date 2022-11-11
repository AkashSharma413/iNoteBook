import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getAllNotes } = context;

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <>
      <AddNote />
      <div className="row">
        <h3>Your Notes</h3>
      </div>
      <div className="row">
        {notes.map((note) => {
          return <Noteitem note={note} key={note._id}/>;
        })}
      </div>
    </>
  );
};

export default Notes;
