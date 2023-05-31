import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

const ToDoList = ({ list, handleDelete }) => {
  return (
    <div className="todo-list-container">
      {list.map((item, index) => (
        <ToDoItem
          key={index}
          id={item.id}
          title={item.title}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ToDoList;
