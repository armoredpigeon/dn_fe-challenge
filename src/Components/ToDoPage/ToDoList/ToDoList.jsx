import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

const ToDoList = ({ list }) => {
  return (
    <div className="todo-list-container">
      {list.map((item) => 
        (<ToDoItem id={item.id} title={item.title}></ToDoItem>)
      )}
    </div>
  );
};

export default ToDoList;
