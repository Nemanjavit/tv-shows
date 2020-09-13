import React from "react";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import { useRouteMatch, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import classNames from "classnames";
import styles from "../scss/Singleshow.module.scss";
import Episodes from "./Episodes";
import MainInfo from "./MainInfo";
import Cast from "./Cast";
import ProtectedRoute from "./ProtectedRoute";

const SingleShow = () => {
	let { path, url } = useRouteMatch();

	const subnavStyles = classNames({
		[`${styles.sub_nav}`]: true,
	});
	console.log(styles.sub_nav);
	return (
		<>
			<Container>
				<div className={subnavStyles}>
					<NavLink className={styles.navlink} to={`${url}/main`}>
						Main
					</NavLink>
					<NavLink className={styles.navlink} to={`${url}/episodes`}>
						Episodes
					</NavLink>
					<NavLink className={styles.navlink} to={`${url}/cast`}>
						Cast
					</NavLink>
				</div>
			</Container>
			<Route path={`${path}/main`} component={MainInfo} />
			<Route path={`${path}/episodes`} component={Episodes} />
			<Route path={`${path}/cast`} component={Cast} />
		</>
	);
};
export default SingleShow;
