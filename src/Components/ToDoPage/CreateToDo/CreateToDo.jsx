import TextField from "@mui/material/TextField";
import DatePicker from "@mui/material/DatePicker";
import "./CreateToDo.css";

const CreateToDo = () => {
  // Add event handlers here
  // Add the ability for the user to select a category from the options "Chores", "Creative", "Exercise", "Social", and "Work"
  return (
    <form className="create-todo-container">
      <TextField fullWidth label="Create To-Do" variant="outlined" />
      <DatePicker fullWidth={true} label="Due Date" variant="outlined" />
        <button type="submit">Create</button>
        <button type="reset">Cancel</button>
    </form>
  );
};

export default CreateToDo;
