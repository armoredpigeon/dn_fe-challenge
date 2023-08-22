import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CreateToDo from "./CreateToDo/CreateToDo";
import ToDoList from "./ToDoList/ToDoList";

const ToDoPage = () => {
  const [list, setList] = useState([]);

  // Add event handlers here (hint: use uuidv4 to generate unique id's if needed)
  
  return (
    <div>
      <CreateToDo />
      <ToDoList list={list} />
    </div>
  );
};

export default ToDoPage;
