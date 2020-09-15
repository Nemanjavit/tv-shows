import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { getUserInfo, patchUser } from "./http-requestes";
import ShowCard from "./ShowCard";
import { userId } from "./helper/getToken";

const FavoritesPage = () => {
	const [usersFavorite, setUsersFavorite] = useState([]);
	const myId = userId();

	useEffect(() => {
		getUserInfo(myId).then((res) => {
			setUsersFavorite(res.data.shows);
		});
	}, [myId, usersFavorite]);
	const removeFavoriteHandler = (id, e) => {
		e.stopPropagation();
		e.preventDefault();
		// removing show from favorites
		let list = usersFavorite;
		let newList = list.filter((show) => show.id !== id);

		const data = { id: myId, shows: newList };
		patchUser(myId, data).then((res) => {
			console.log(res.data);
		});
	};

	return (
		<Container>
			<Row>
				{usersFavorite.map((show) => (
					<Col className="my-2" sm={4} key={show.id}>
						<ShowCard
							data={show}
							removeFavoriteHandler={(e) => removeFavoriteHandler(show.id, e)}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default FavoritesPage;
