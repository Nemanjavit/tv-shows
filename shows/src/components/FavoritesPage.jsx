import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { getUserInfo } from "./http-requestes";
import ShowCard from "./ShowCard";
import { userId } from "./helper/getToken";

const FavoritesPage = () => {
	const [usersFavorite, setUsersFavorite] = useState([]);
	const id = userId();

	useEffect(() => {
		getUserInfo(id).then((res) => {
			setUsersFavorite(res.data.shows);
			console.log(res.data.shows);
		});
	}, []);

	return (
		<Container>
			<Row>
				{usersFavorite.map((show) => (
					<Col className="my-2" sm={4} key={show.id}>
						<ShowCard data={show} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default FavoritesPage;
