import React from "react";
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
			<ProtectedRoute path={`${path}/main`} component={MainInfo} />
			<ProtectedRoute path={`${path}/episodes`} component={Episodes} />
			<ProtectedRoute path={`${path}/cast`} component={Cast} />
		</>
	);
};
export default SingleShow;
