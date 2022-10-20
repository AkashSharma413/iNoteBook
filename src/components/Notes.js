import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;

  return (
    <>
      <div className="row">
        <h3>Your Notes</h3>
      </div>
      <div className="row">
        {notes.map((note) => {
          return <Noteitem note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
