import React, { useEffect, useState } from "react";
import { getToken } from "./helper/getToken";
import { Link, useLocation } from "react-router-dom";
import styles from "../scss/Nav.module.scss";
import classNames from "classnames";

const Navigation = ({ search, value }) => {
	const [token, setToken] = useState("");
	let location = useLocation();

	useEffect(() => {
		const tokenString = getToken();
		if (tokenString !== "") {
			setToken(tokenString);
		}
	}, [location.pathname]);

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
					<Link to="/" className="text-white">
						TV-Shows
					</Link>

					<div className={styles.navigation} id="basic-navbar-nav">
						<input
							type="text"
							name="search"
							placeholder="Search"
							className={searchfldClasses}
							value={value}
							onChange={search}
							autoComplete="off"
						/>

						<Link className={linkStyles} to="/shows">
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
