import React, { useContext, useRef } from "react";
import { MyContext } from "../MyContext";

const Task = (props) => {
  const { setList, list } = useContext(MyContext);
  const listItem = useRef(null);

  function deleteTask(e) {
    listItem.current.classList.add("fade-out");
    const newList = list.filter((item, i) => i != props.index);
    setTimeout(() => {
      setList(newList);
      listItem.current.classList.remove("fade-out");
      e.target.checked = false;
    }, 500);
    localStorage.setItem("todos", JSON.stringify(newList));
  }
  return (
    <>
      <li
        ref={listItem}
        className="task relative border border-gray-400 my-3 rounded min-w-[225px] w-[50%]  px-4 py-3 break-words"
      >
        <h1 className="text-xl font-semibold">{props.task.title}</h1>
        <hr />
        <h3 className="text-sm font-normal my-2">{props.task.description}</h3>
        <span className="text-xs absolute right-1 bottom-1">
          <strong>{props.task.time}</strong> {props.task.date}
        </span>
        <button
          onClick={deleteTask}
          className="absolute top-[4%] left-[-40px] "
        >
          <input
            type="checkbox"
            id={props.index}
            name={props.index}
            className="scale-150"
          />
        </button>
      </li>
    </>
  );
};

export default Task;
