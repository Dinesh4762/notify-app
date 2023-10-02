import React, { useContext, useEffect } from "react";
import { MyContext } from "../MyContext";

const TaskForm = () => {
  const {
    title,
    setTitle,
    description,
    setDesc,
    setFormVisible,
    getDate,
    setList,
    list,
  } = useContext(MyContext);


  function onSubmit(e) {
    e.preventDefault();
    setFormVisible((p) => !p);
    const [date, time] = getDate();

    if (title && description) {
      localStorage.setItem(
        "todos",
        JSON.stringify([{ title, description, date, time }, ...list])
      );
      setList((prev) => {
        return [{ title, description, date, time }, ...prev];
      });
     
      setTitle("");
      setDesc("");
    }
  }
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white my-3 w-full z-40 flex flex-col items-center justify-center gap-2 md:flex-row lg:flex-row"
    >
      <input
        placeholder="enter task"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-500 rounded px-3 py-1 my-1 h-auto min-w-[230px] lg:mx-3  "
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="enter task description"
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

export default TaskForm;
