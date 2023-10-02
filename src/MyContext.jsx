import { createContext, useEffect, useState } from "react";

export const MyContext = createContext("");

const MyContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [list, setList] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [notesDesc, setNotesDesc] = useState("");
  const [notesTitle, setNotesTitle] = useState("");
  const [notesList, setNotesList] = useState([]);
  const [isNotesFormVisible, setNotesFormVisible] = useState(false);

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (todos) {
      setList(todos);
    } ;
    if (notes) {
      setNotesList(notes);
    }
  },[]);

  function getDate() {
    const date = new Date();
    return [
      `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      `${date.getHours()}:${
        (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
      }`,
    ];
  }

  const value = {
    title,
    setTitle,
    description,
    setDesc,
    list,
    setList,
    isFormVisible,
    setFormVisible,
    notesDesc,
    setNotesDesc,
    notesTitle,
    setNotesTitle,
    notesList,
    setNotesList,
    isNotesFormVisible,
    setNotesFormVisible,
    getDate,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyContextProvider;
