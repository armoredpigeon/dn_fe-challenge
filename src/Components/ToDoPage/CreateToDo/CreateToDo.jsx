import TextField from "@mui/material/TextField";
import "./CreateToDo.css";

const CreateToDo = () => {
  // Add event handlers here
  return (
    <form className="create-todo-container">
      <TextField fullWidth label="Create To-Do" variant="outlined" />
      <TextField type="date" fullWidth={true} variant="outlined"/>
        <button>Create</button>
        <button>Cancel</button>
    </form>
  );
};

export default CreateToDo;
