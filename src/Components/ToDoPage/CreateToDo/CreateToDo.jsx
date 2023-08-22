import TextField from "@mui/material/TextField";
import "./CreateToDo.css";

const CreateToDo = () => {
  // Add event handlers here
  return (
    <div className="create-todo-container">
      <TextField
        fullWidth
        label="Create To-Do"
        variant="outlined"
      />
    </div>
  );
};

export default CreateToDo;
