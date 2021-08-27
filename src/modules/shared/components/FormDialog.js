import React, {useState} from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Tooltip} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from '../../../styles/styles'
import axios from 'axios';
const url = "http://localhost:3001/tasks";
const FormDialog = ({setTriggering}) => 
{
  /*  */
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {setOpen(true)}; 
  const handleClose = () => {setOpen(false)};
  /*  */
  const [taskName, saveTasksName] = useState("");
  const [priorityLevel, savePriorityLevel] = useState("");
  const handleSubmit = async (event) =>
  { 
    event.preventDefault();
    console.log("you clicked on create!", taskName, priorityLevel);
    try 
    {
      const result = await axios.post(url, 
      { 
        taskName,
        priorityLevel,
      });
      if(result.status === 201)
        {console.log("has posteado correctamente en tu api")}
    } catch (error) 
      {
        console.log(error);
        console.log("has tenido un error!");
      }
      setTriggering(true);
  }
       
      
      
  const styles = useStyles();
  return (
    <>
      <Tooltip title="Add" onClick={handleClickOpen} aria-label="add">
        <Fab color="secondary" className={styles.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Add Task:</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="taskName"
            label="Task Name"
            type="text"
            fullWidth
            onChange={e => saveTasksName(e.target.value)}
            />
          <TextField
            margin="dense"
            id="priorityLevel"
            label="Priority"
            type="text"
            fullWidth
            onChange={e => savePriorityLevel(e.target.value)}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} type="submit" color="primary">
            Create
          </Button>
        </DialogActions>
      </form> 
      </Dialog>
    </>
  );
}
export default FormDialog;