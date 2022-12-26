import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { note, updateNote } = props;
  return (
    <>
      <div className="col-md-3 my-3">
        <div className="card text-bg-light h-100">
          <div className="card-header">
            <h5 className="card-title text-center">{note.title}</h5>
          </div>
          <div className="card-body">
            <p className="card-text">{note.description}</p>
          </div>
          <div className="card-footer text-center">
            <i className="fa-solid fa-pen-to-square mx-2" onClick={() => {updateNote(note)}}></i>
            <i className="fa-solid fa-trash mx-2" onClick={() => {deleteNote(note._id)}}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
