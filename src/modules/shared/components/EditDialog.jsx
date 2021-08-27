import React, { useState, useRef } from "react";
import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
} from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";

const EditDialog = (props) => {
	let history = useHistory();
	/* Manejando los props */
	const { idTask, tasks, setTriggering } = props;
	const priorityLevelRef = useRef("");
	const taskNameRef = useRef("");
	/* Manejador del dialog  */
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	/*  */
	/* Generando refs */
	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log("you clicked on edit!", idTask);
		const newTaskNameRef = taskNameRef.current.value;
		const newPriorityLevelRef = priorityLevelRef.current.value;

		const editTask = {
			priorityLevel: newPriorityLevelRef,
			taskName: newTaskNameRef,
		};
		const url = `http://localhost:3001/tasks/${idTask}`;

		try {
			const result = await axios.put(url, editTask);
			if (result.status === 200) {
				console.log("has editado correctamente en tu api", editTask);
			}
			setTriggering(true);
		} catch (error) {
			console.log(error);
			console.log("has tenido un error!");
		}
		history.push("/tasks");
		handleClose(true);
	};

	return (
		<>
			<IconButton size="small" onClick={handleClickOpen}>
				<EditOutlinedIcon />
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="form-dialog-title"
				>
					<form onSubmit={handleSubmit}>
						<DialogTitle id="form-dialog-title">Edit Task:</DialogTitle>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								label="Task Name"
								type="text"
								inputRef={taskNameRef}
								defaultValue={tasks.taskName}
								fullWidth
							/>
							<TextField
								margin="dense"
								id="priorityLevel"
								label="Priority"
								type="text"
								inputRef={priorityLevelRef}
								defaultValue={tasks.priorityLevel}
								fullWidth
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} type="submit" color="primary">
								Edit
							</Button>
						</DialogActions>
					</form>
				</Dialog>
			</IconButton>
		</>
	);
};
export default withRouter(EditDialog);
