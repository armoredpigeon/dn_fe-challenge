import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ToDoItem.css";

const ToDoItem = ({ id, title }) => {

  return (
    <Paper className="todo-item-container">
      <Checkbox />
      <Typography
        variant="h6"
      >
        {title}
      </Typography>
      <div className="todo-item-delete-button">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default ToDoItem;
