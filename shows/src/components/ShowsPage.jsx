import React, { useState, useEffect } from "react";
import { getShows } from "./http-requestes";
import ShowCard from "./ShowCard";
import { Container, Row } from "react-bootstrap";

const ShowsPage = () => {
	const [shows, setShows] = useState([]);

	useEffect(() => {
		getShows().then((res) => {
			setShows(res.data);
		});
	}, []);

	return (
		<Container>
			<Row>
				{shows.map((show) => (
					<ShowCard key={show.id} data={show} />
				))}
			</Row>
		</Container>
	);
};

export default ShowsPage;
