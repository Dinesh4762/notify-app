import React, { useContext, useState, useRef, useEffect } from "react";
import { MyContext } from "../MyContext";

const Note = (props) => {
  const { setNotesList, notesList } = useContext(MyContext);
  const [showToolTip, setShowToolTip] = useState(false);
  const [color, setColor] = useState(null);
  const note = useRef(null);

  useEffect(() => {
    const i = Math.floor(Math.random() * 4);
    const colors = ["#D2B48C", "#dfd78f", "#D8BFD8", "#F5DEB3"];
    console.log(colors[i]);
    setColor(colors[i]);
  }, []);

  const deleteNote = () => {
    note.current.classList.add("fade-out");
    const newList = notesList.filter((item, i) => i != props.index);
    setTimeout(() => {
      setNotesList(newList);
      note.current.classList.remove("fade-out");
    }, 500);
    localStorage.setItem("notes", JSON.stringify(newList));
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(props.note.notesDesc);
      setShowToolTip(true);
      setTimeout(() => {
        setShowToolTip(false);
      }, 1500);
      console.log("copied");
    } catch (error) {
      console.error("Failed to copy text !");
    }
  };
  return (
    <>
      <li
        ref={note}
        className={`relative border border-gray-400 bg-[${color}] my-3 rounded min-w-[225px] w-[50%]  px-4 py-3 break-words`}
      >
        <h1 className="text-xl font-semibold">{props.note.notesTitle}</h1>

        <h3 className="relative text-sm font-normal my-3 mb-4 pr-5">
          {props.note.notesDesc}

          {/* Tooltip */}
          {showToolTip && (
            <div className=" tooltip absolute top-[-45px] right-[-30px]  rounded-sm px-2 py-1 bg-[#c0bdbd] ">
              Copied!
            </div>
          )}

          {/* Copy-Icon */}
          <button
            type="button"
            className="copy absolute top-[-6px] right-[-10px] cursor-pointer"
            onClick={copyToClipboard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="copy-icon"
            >
              <title>Copy</title>
              <path
                fill="currentColor"
                d="M9 18q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.588T3 20V7q0-.425.288-.713T4 6q.425 0 .713.288T5 7v13h10q.425 0 .713.288T16 21q0 .425-.288.713T15 22H5Zm4-6V4v12Z"
              />
            </svg>
          </button>
        </h3>
        <span className="text-xs absolute right-1 bottom-1">
          <strong>{props.note.time}</strong> {props.note.date}
        </span>
        <button
          onClick={deleteNote}
          className="absolute top-[-17%] left-[-17px] text-red bg-white rounded-full border-4 border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <title>Delete Note</title>
            <path
              fill="#f24646"
              d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"
            />
          </svg>
        </button>
      </li>
    </>
  );
};

export default Note;
