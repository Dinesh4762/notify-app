import React, { useContext } from "react";
import { MyContext } from "../MyContext";

const NotesForm = () => {
  const {
    notesTitle,
    notesDesc,
    setNotesDesc,
    setNotesTitle,
    setNotesList,
    setNotesFormVisible,
    getDate,
    notesList
  } = useContext(MyContext);

  function onSubmit(e) {
    e.preventDefault();
    setNotesFormVisible((p) => !p);
    const [date, time] = getDate();

    if (notesTitle && notesDesc) {
      localStorage.setItem(
        "notes",
        JSON.stringify([{ notesTitle, notesDesc, date, time }, ...notesList])
      );
      setNotesList((prev) => {
        return [{ notesTitle, notesDesc, date, time }, ...prev];
      });
      setNotesTitle("");
      setNotesDesc("");
    }
  }
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white my-3 w-full z-40 flex flex-col items-center justify-center gap-2 md:flex-row lg:flex-row"
    >
      <input
        placeholder="title"
        type="text"
        value={notesTitle}
        onChange={(e) => setNotesTitle(e.target.value)}
        className="border border-gray-500 rounded px-3 py-1 my-1 h-auto min-w-[230px] lg:mx-3  "
      />
      <input
        type="text"
        value={notesDesc}
        onChange={(e) => setNotesDesc(e.target.value)}
        placeholder="enter notes description"
        className="border border-gray-500 rounded px-3 py-1 my-1 h-auto min-w-[230px] lg:mx-3 "
      />
      <button
        type="submit"
        className="min-w-[150px] px-3 py-1 my-2 border rounded bg-slate-300 md:min-w-[100px]"
      >
        Add
      </button>
    </form>
  );
};

export default NotesForm;
