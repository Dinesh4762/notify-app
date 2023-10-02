import React, { useEffect, useRef, useState } from "react";
import ToDo from "./components/ToDo";
import Notes from "./components/Notes";

const App = () => {
  const [currentTab, setCurrentTab] = useState("todo");

  function changeTab(e) {
    const { name } = e.target; 
    
    if(name === currentTab){
      console.log("same tab clicked")
    }
    else{
      console.log(name);
      setCurrentTab(name);
    }
  }

  return (
    <div className="w-[60%] min-w-[336px] h-full relative mx-auto ">
      <header className="sticky top-0 grid grid-cols-2 h-[50px] z-40">
        <button
          name="todo"
          className={` ${
            currentTab === "todo" ? "active" : "inactive"
          }`}
          onClick={changeTab}
        >
          Todo's
        </button>
        <button
          name="notes"
          className={`${currentTab === "notes" ? "active" : "inactive"}`}
          onClick={changeTab}
        >
          Notes
        </button>
      </header>
      {currentTab === "todo" ? <ToDo></ToDo> : <Notes />}
    </div>
  );
};

export default App;
