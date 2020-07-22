import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { getToken } from "./helper/getToken";
import { Link } from "react-router-dom";

const Navigation = () => {
	let token = "";
	const [isLogged, setisLogged] = useState(false);

	useEffect(() => {
		let token = getToken();
		if (token !== "") {
			setisLogged(true);
		}
	}, [token]);

	return (
		<Navbar bg="dark" expand="lg">
			<Container>
				<Navbar.Brand href="#home">TV-Shows</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Link to="/">Shows</Link>

						{isLogged ? (
							<Link to="/favorite">Favorite</Link>
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
