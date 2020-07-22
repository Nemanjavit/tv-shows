import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import Navigation from "./components/Nav";
import ShowsPage from "./components/ShowsPage";

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					<ProtectedRoute path="/shows" component={ShowsPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
