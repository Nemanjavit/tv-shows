import React from "react";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import { useRouteMatch, NavLink, Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Episodes from "./Episodes";
import MainInfo from "./MainInfo";
import Cast from "./Cast";
import ProtectedRoute from "./ProtectedRoute";

const SingleShow = () => {
	let { path, url } = useRouteMatch();

	console.log(`url:${url},path:${path}`);

	return (
		<Container>
			<div className="sub-nav">
				<NavLink to={`${url}/main`}>Main</NavLink>
				<NavLink to={`${url}/episodes`}>Episodes</NavLink>
				<NavLink to={`${url}/cast`}>Cast</NavLink>
			</div>

			<Route path={`${path}/main`} component={MainInfo} />
			<Route path={`${path}/episodes`} component={Episodes} />
			<Route path={`${path}/cast`} component={Cast} />
		</Container>
	);
};
export default SingleShow;
