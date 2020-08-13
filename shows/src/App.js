import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/main.css";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import Navigation from "./components/Nav";
import ShowsPage from "./components/ShowsPage";
import SingleShow from "./components/SingleShow";
import { SearchContext } from "./components/helper/SearchContext";
import FavoritesPage from "./components/FavoritesPage";

function App() {
	const [query, setQuery] = useState("");

	return (
		<Router>
			<div className="App">
				<SearchContext.Provider value={{ query, setQuery }}>
					<Navigation />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
						<ProtectedRoute path="/shows" exact component={ShowsPage} />
						<ProtectedRoute path="/shows/:id" component={SingleShow} />
						<ProtectedRoute path="/favorites" component={FavoritesPage} />
					</Switch>
				</SearchContext.Provider>
			</div>
		</Router>
	);
}

export default App;
