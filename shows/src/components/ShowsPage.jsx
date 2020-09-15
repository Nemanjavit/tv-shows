import React, { useState, useEffect, useContext } from "react";
import {
	getShows,
	searchShows,
	patchUser,
	getUserInfo,
} from "./http-requestes";
import ShowCard from "./ShowCard";
import { Container, Row } from "react-bootstrap";
import { SearchContext } from "./helper/SearchContext";
import { Col } from "react-bootstrap";
import { userId } from "./helper/getToken";

const ShowsPage = () => {
	const [shows, setShows] = useState([]);
	const [searchedShow, setSearchedShow] = useState([]);
	const [prevfavorites, setPrevFavorites] = useState([]);
	const { query, setQuery } = useContext(SearchContext);
	const myId = userId();

	useEffect(() => {
		getShows().then((res) => {
			console.log(res);
			setShows(res.data);
		});
		searchShows(query).then((res) => {
			setSearchedShow(res.data);
		});
		getUserInfo(myId).then((res) => {
			setPrevFavorites(res.data.shows);
		});
	}, [query]);

	const setFavoriteHandler = (show, e) => {
		e.stopPropagation();
		e.preventDefault();
		const list = prevfavorites;
		list.push(show);

		// remove duplicates
		const noDuplicates = [
			...new Map(list.map((show) => [show.id, show])).values(),
		];

		const data = { id: myId, shows: noDuplicates };
		patchUser(myId, data).then((res) => {
			console.log(res.data);
		});
	};
	console.log(searchedShow);
	const displayShows = () => {
		if (searchedShow.length > 0) {
			return searchedShow.map((show) => (
				<Col sm={4} className="my-2 " key={show.show.id}>
					<ShowCard
						setFavoriteHandler={(e) => setFavoriteHandler(show, e)}
						data={show.show}
					/>
				</Col>
			));
		}
		return shows.map((show) => (
			<Col sm={4} className="my-2" key={show.id}>
				<ShowCard
					setFavoriteHandler={(e) => setFavoriteHandler(show, e)}
					data={show}
				/>
			</Col>
		));
	};

	return (
		<Container>
			<Row>{displayShows()}</Row>
		</Container>
	);
};

export default ShowsPage;
