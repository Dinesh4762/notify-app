import React, { useContext } from "react";
import NotesForm from "./NotesForm";
import Note from "./Note";
import { MyContext } from "../MyContext";

const Notes = () => {
  const { isNotesFormVisible, setNotesFormVisible, notesList } =
    useContext(MyContext);
  return (
    <div className="w-full relative flex flex-col items-center">
      <div className="w-full bg-white border-b-2 border-b-gray-300 sticky top-[50px] z-40 text-center">
        {isNotesFormVisible ? (
          <NotesForm />
        ) : (
          <button
            onClick={() => setNotesFormVisible((p) => !p)}
            className=" click-effect border border-gray-600 px-3 py-1 rounded  my-3 font-medium "
          >
            <span className="text-xl font-bold mx-1">+</span>New Note
          </button>
        )}
      </div>
      <hr />
      <ul className="notes-container rounded w-[65%] px-4 py-2 flex flex-col items-center">
        {notesList.length > 0 &&
          notesList.map((note, i) => {
            return <Note key={i} index={i} note={note} />;
          })}
      </ul>
    </div>
  );
};

export default Notes;
