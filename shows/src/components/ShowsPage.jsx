import React, { useState, useEffect } from "react";
import {
	getShows,
	searchShows,
	patchUser,
	getUserInfo,
} from "./http-requestes";
import ShowCard from "./ShowCard";
import { Container, Row, Col } from "react-bootstrap";
import { userId } from "./helper/getToken";
import useDebounce from "./helper/useDebounce";

const ShowsPage = ({ query }) => {
	const [shows, setShows] = useState([]);
	const [searchedShow, setSearchedShow] = useState([]);
	const [prevfavorites, setPrevFavorites] = useState([]);
	const debouncedSearchShows = useDebounce(query);
	console.log(debouncedSearchShows);
	const myId = userId();

	useEffect(() => {
		getShows().then((res) => {
			let newArr = [];
			newArr = res.data;
			newArr.length = 20;
			setShows(newArr);
		});

		getUserInfo(myId).then((res) => {
			setPrevFavorites(res.data.shows);
		});
	}, []);
	useEffect(() => {
		if (debouncedSearchShows) {
			searchShows(debouncedSearchShows).then((res) => {
				setSearchedShow(res.data);
			});
		} else {
			setSearchedShow([]);
		}
	}, [debouncedSearchShows]);

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
