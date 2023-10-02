import React, { useContext } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { MyContext } from "../MyContext";

const ToDo = () => {
  const { isFormVisible, setFormVisible, list } = useContext(MyContext);

  return (
    <div className="w-full relative flex flex-col items-center">
      <div className="w-full bg-white border-b-2 border-b-gray-300 sticky top-[50px] z-40 text-center">

        {isFormVisible ? (
          <TaskForm />
        ) : (
          <button
            onClick={() => setFormVisible((p) => !p)}
            className="click-effect border border-gray-600 px-3 py-1 rounded mx-auto my-3 font-medium "
          >
            <span className="text-xl font-bold mx-1">+</span>New Task
          </button>
        )}
      </div>
      <hr />
      <ul className="rounded w-[65%] px-4 py-2 flex flex-col items-center">
        {list.length > 0 &&
          list.map((task, i) => {
            return <Task  key = {i} index={i} task={task} />;
          })}
      </ul>
    </div>
  );
};

export default ToDo;
