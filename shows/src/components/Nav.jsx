import React, { useEffect, useState, useContext } from "react";
import { Navbar, Nav, Container, FormControl } from "react-bootstrap";
import { getToken } from "./helper/getToken";
import { Link, useLocation, useHistory } from "react-router-dom";
import { SearchContext } from "./helper/SearchContext";
import styles from "../scss/Nav.module.scss";
import classNames from "classnames";

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

	const headerClasses = classNames({
		"d-none": location.pathname === "/",
		[`${styles.header}`]: true,
	});
	const linkStyles = classNames("mx-2", { [`${styles.link}`]: true });
	const navClasses = classNames({ [`${styles.nav}`]: true });
	const searchfldClasses = classNames({
		[`${styles.search_field}`]: true,
		"mr-sm-2": true,
	});

	return (
		<header className={headerClasses}>
			<div className="container">
				<nav className={navClasses}>
					<a href="/" className="text-white">
						TV-Shows
					</a>

					<div className={styles.navigation} id="basic-navbar-nav">
						<input
							type="text"
							name="search"
							placeholder="Search"
							className={searchfldClasses}
							value={query}
							onChange={inputChange}
						/>

						<Link
							onClick={(e) => setQuery("")}
							className={linkStyles}
							to="/shows"
						>
							Shows
						</Link>

						{token ? (
							<>
								<Link className={linkStyles} to="/favorites">
									Favorite
								</Link>
								<Link className={linkStyles} to="/" onClick={logOut}>
									Log Out
								</Link>
							</>
						) : (
							<Link to="/login">Log in</Link>
						)}
					</div>
				</nav>
			</div>
		</header>
	);
};
export default Navigation;
