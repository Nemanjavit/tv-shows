import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Nav";
import ShowsPage from "./components/ShowsPage";
import SingleShow from "./components/SingleShow";
import { SearchContext } from "./components/helper/SearchContext";
import FavoritesPage from "./components/FavoritesPage";
import Home from "./components/Home";
import "./scss/main.scss";

function App() {
	const [query, setQuery] = useState("");

	return (
		<div className="App">
			<Router>
				<SearchContext.Provider value={{ query, setQuery }}>
					<Navigation />
					<Switch>
						<Route path="/" exact component={Home} />
						<ProtectedRoute path="/shows" exact component={ShowsPage} />
						<ProtectedRoute path="/shows/:id" component={SingleShow} />
						<ProtectedRoute path="/favorites" component={FavoritesPage} />
					</Switch>
				</SearchContext.Provider>
			</Router>
		</div>
	);
}

export default App;
