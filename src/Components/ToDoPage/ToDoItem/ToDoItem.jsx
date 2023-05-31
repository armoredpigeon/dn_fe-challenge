import { useState } from "react";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ToDoItem.css";

const ToDoItem = ({ id, title, handleDelete }) => {
  const [checked, setChecked] = useState(false);

  const handleDeleteClick = () => {
    handleDelete(id);
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <Paper className="todo-item-container">
      <Checkbox checked={checked} onClick={handleCheck} />
      <Typography
        variant="h6"
        sx={{ textDecoration: checked ? "line-through" : "none" }}
      >
        {title}
      </Typography>
      <div className="todo-item-delete-button">
        <IconButton onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default ToDoItem;
