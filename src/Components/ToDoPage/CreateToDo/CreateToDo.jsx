import TextField from "@mui/material/TextField";
import "./CreateToDo.css";

const CreateToDo = ({createToDoItem}) => {

  const returnHandler = (event)=> {
    if(event.key !== "Enter"){
      return;
    }
    let itemLabel = event.target.value;
    createToDoItem(itemLabel);
    event.target.value = '';
  }
  // Add event handlers here
  return (
    <div className="create-todo-container">
      <TextField
        fullWidth
        label="Create To-Do"
        variant="outlined"
        onKeyDown={returnHandler}
      />
    </div>
  );
};

export default CreateToDo;
