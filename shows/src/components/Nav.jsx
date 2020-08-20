import React, { useEffect, useState, useContext } from "react";
import { Navbar, Nav, Container, FormControl } from "react-bootstrap";
import { getToken } from "./helper/getToken";
import { Link, useLocation, useHistory } from "react-router-dom";
import { SearchContext } from "./helper/SearchContext";

const Navigation = () => {
	const { query, setQuery } = useContext(SearchContext);
	const [search, setSearch] = useState("");
	const [token, setToken] = useState("");

	let location = useLocation();
	let history = useHistory();

	useEffect(() => {
		const tokenString = getToken();
		if (tokenString !== "") {
			setToken(tokenString);
		}
	}, [location.pathname]);

	const inputChange = (e) => {
		setQuery(e.target.value);
		history.push("/shows");
	};

	const logOut = () => {
		localStorage.removeItem("token");
	};
	// const navHidden = () => {
	// 	if (location.pathname !== "/" && location.pathname !== "/login") {
	// 		setHidden(() => setHidden(false));
	// 		console.log("hey");
	// 	}
	// };

	return (
		<Navbar expand="lg">
			<Container>
				<Navbar.Brand href="/" className="logo-text">
					TV-Shows
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<FormControl
							type="text"
							name="search"
							placeholder="Search"
							className="mr-sm-2 search-bar"
							value={query}
							onChange={inputChange}
						/>

						<Link
							onClick={(e) => setQuery("")}
							className="mx-2 link"
							to="/shows"
						>
							Shows
						</Link>

						{token ? (
							<>
								<Link className="mx-2" to="/favorites">
									Favorite
								</Link>
								<Link to="/" onClick={logOut}>
									Log Out
								</Link>
							</>
						) : (
							<Link to="/login">Log in</Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default Navigation;
