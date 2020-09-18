import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Nav";
import ShowsPage from "./components/ShowsPage";
import SingleShow from "./components/SingleShow";
import FavoritesPage from "./components/FavoritesPage";
import Home from "./components/Home";
import "./scss/main.scss";
import { Scrollbars } from "react-custom-scrollbars";

function App() {
	const [query, setSearchShows] = useState("");

	const onSearchShows = (e) => {
		setSearchShows(e.target.value);
	};

	return (
		<Scrollbars autoHide style={{ height: "100vh" }}>
			<div className="App">
				<Router>
					<Navigation value={query} search={onSearchShows} />
					<Switch>
						<Route path="/" exact component={Home} />
						<ProtectedRoute
							path="/shows"
							exact
							setSearchShows={setSearchShows}
							component={ShowsPage}
							query={query}
						/>
						<ProtectedRoute path="/shows/:id" component={SingleShow} />
						<ProtectedRoute path="/favorites" component={FavoritesPage} />
					</Switch>
				</Router>
			</div>
		</Scrollbars>
	);
}

export default App;
