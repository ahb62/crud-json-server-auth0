import React, { useState } from "react";
import axios from "axios";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
} from "@material-ui/core";
import DeleteOutlineSharpIcon from "@material-ui/icons/DeleteOutlineSharp";
import { useHistory } from "react-router-dom";
export const DeleteDialog = ({ idTask, tasks, task, setTriggering }) => {
	let history = useHistory();
	const [open, setOpen] = useState(false);
	/* Handling the  */
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleDeleting = async () => {
		try {
			const url = `http://localhost:3001/tasks/${idTask}`;
			console.log(url);
			const handlingDelete = await axios.delete(url);
			if (handlingDelete.status === 200) {
				console.log("this request work!");
			}
		} catch (error) {
			console.log(error);
		}
		setTriggering(true);
		setOpen(false);
		history.push("/tasks");
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<IconButton size="small" onClick={handleClickOpen}>
				<DeleteOutlineSharpIcon />
			</IconButton>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"You want to delete the task."}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Are you sure?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						No
					</Button>
					<Button
						type="submit"
						onClick={handleDeleting}
						color="primary"
						autoFocus
					>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
