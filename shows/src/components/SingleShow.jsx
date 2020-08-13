import React from "react";
import { useRouteMatch, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import Episodes from "./Episodes";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import MainInfo from "./MainInfo";
import Cast from "./Cast";

const SingleShow = () => {
	let { path, url } = useRouteMatch();

	return (
		<Container>
			<div className="sub-nav">
				<NavLink to={`${url}/main`}>Main</NavLink>
				<NavLink to={`${url}/episodes`}>Episodes</NavLink>
				<NavLink to={`${url}/cast`}>Cast</NavLink>
			</div>
			<Switch>
				<Route path={`${path}/main`} component={MainInfo} />
				<Route path={`${path}/episodes`} component={Episodes} />
				<Route path={`${path}/cast`} component={Cast} />
			</Switch>
		</Container>
	);
};
export default SingleShow;
