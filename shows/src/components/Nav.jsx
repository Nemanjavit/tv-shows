import React, { useEffect, useState, useContext } from "react";
import {
	Navbar,
	Nav,
	Container,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";
import { getToken } from "./helper/getToken";
import { Link } from "react-router-dom";
import { SearchContext } from "./helper/SearchContext";

const Navigation = () => {
	let token = "";
	const [isLogged, setisLogged] = useState(false);
	const { query, setQuery } = useContext(SearchContext);
	const [search, setSearch] = useState("");

	useEffect(() => {
		let token = getToken();
		if (token !== "") {
			setisLogged(true);
		}
	}, [token]);

	const submitHandler = (e) => {
		e.preventDefault();
		setQuery(search);
	};
	return (
		<Navbar bg="dark" expand="lg">
			<Container>
				<Navbar.Brand href="/" className="logo-text">
					TV-Shows
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Form inline onSubmit={submitHandler}>
							<FormControl
								type="text"
								name="search"
								placeholder="Search"
								className="mr-sm-2 search-bar"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
							<Button type="submit" variant="outline-success">
								Search
							</Button>
						</Form>
						<Link
							onClick={(e) => setQuery("")}
							className="mx-2 link"
							to="/shows"
						>
							Shows
						</Link>

						{isLogged ? (
							<Link to="/favorites">Favorite</Link>
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
