import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./CreateToDo.css";

const CreateToDo = ({ handleAdd }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = () => {
    handleAdd(title);
    setTitle("");
  };

  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      handleSubmit(title);
    }
  };

  return (
    <div className="create-todo-container">
      <TextField
        fullWidth
        label="Create To-Do"
        variant="outlined"
        value={title}
        onChange={handleChange}
        onBlur={handleSubmit}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default CreateToDo;
