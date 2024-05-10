import { useState, createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import CreateToDo from "./CreateToDo/CreateToDo";
import ToDoList from "./ToDoList/ToDoList";
import ListDeleteContext from "./ListDeleteContext";

const ToDoPage = () => {
  const [list, setList] = useState([]);
  const listDelete = useContext(ListDeleteContext);

  // Add event handlers here (hint: use uuidv4 to generate unique id's if needed)

  const createToDoItem = (title)=> {
    if(!title){ return; }

    let id = uuidv4();
    setList([...list, {id, title}]);
  };

  const listDeleteFunction = (id) => {
    console.log('click happened');
    let filteredList = list.filter(item => item.id !== id);
    setList(filteredList);
  }
  
  return (
    <div>
      <CreateToDo createToDoItem={createToDoItem}/>
      <ListDeleteContext.Provider value={listDeleteFunction}>
        <ToDoList list={list} />
      </ListDeleteContext.Provider>
    </div>
  );
};

export default ToDoPage;
