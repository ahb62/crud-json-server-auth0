import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
const root = document.getElementById("root");
const url = "http://localhost:3000/tasks";
ReactDOM.render(
	<Auth0Provider
		domain="hello-friend.eu.auth0.com"
		clientId="npfrvfdh2cYf8iEU4WTTGuWx4G9PXmAs"
		redirectUri={url}
	>
		<>
			<App />
		</>
	</Auth0Provider>,
	root
);
