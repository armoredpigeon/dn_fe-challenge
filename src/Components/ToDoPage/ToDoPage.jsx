import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CreateToDo from "./CreateToDo/CreateToDo";
import ToDoList from "./ToDoList/ToDoList";

const ToDoPage = () => {
  const [list, setList] = useState([]);

  const handleAdd = (title) => {
    if (title) {
      setList([...list, { title, id: uuidv4() }]);
    }
  };

  const handleDelete = (id) => {
    const index = list.findIndex((item) => item.id === id);

    if (index !== -1) {
      setList(list.toSpliced(index, 1));
    }
  };

  return (
    <div>
      <CreateToDo handleAdd={handleAdd} />
      <ToDoList list={list} handleDelete={handleDelete} />
    </div>
  );
};

export default ToDoPage;
