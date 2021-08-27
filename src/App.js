/* import ClippedDrawer from "./components/Drawer"; */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TasksView } from "./modules/tasks/TasksView";
import { WelcomeView } from "./modules/tasks/WelcomeView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { ComponentDrawer } from "./modules/shared/components/Drawer";
import EditDialog from "./modules/shared/components/EditDialog";
const theme = createTheme({
	palette: {
		primary: {
			main: "#ef6694",
		},
		secondary: {
			main: "#bb6bc9",
		},
		error: {
			main: "#d32f2f",
		},
	},
});
const url = "http://localhost:3001/tasks";
const App = () => {
	const [tasks, setTasks] = useState([]);
	const [triggerTasks, setTriggering] = useState(true);
	useEffect(() => {
		if (triggerTasks === true) {
			const reqApi = async () => {
				const result = await axios.get(url);
				setTasks(result.data);
			};
			reqApi();
		}
		setTriggering(false);
	}, [triggerTasks]);
	return (
		<>
			<Router>
				<ThemeProvider theme={theme}>
					<ComponentDrawer />
					<Switch>
						<Route exact path="/tasks/:id" component={EditDialog} />

						<Route
							exact
							path="/tasks"
							render={(props) => {
								const idTask = parseInt(props.match.params.id);
								const task = tasks.filter((element) => element.id === idTask);
								return (
									<>
										<TasksView
											tasks={tasks}
											task={task[0]}
											setTriggering={setTriggering}
										/>
									</>
								);
							}}
						/>

						<Route exact path="/" component={WelcomeView} />
					</Switch>
				</ThemeProvider>
			</Router>
		</>
	);
};
export default App;
