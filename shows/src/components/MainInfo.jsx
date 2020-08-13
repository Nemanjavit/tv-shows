import React from "react";
import { Row, Badge, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getSingleShow, getCrew } from "./http-requestes";
import { v4 as uuidv4 } from "uuid";
import { Markup } from "interweave";
import { useParams } from "react-router-dom";

const MainInfo = () => {
	const [show, setShow] = useState({
		image: {},
		genres: [],
		_embedded: [],
		network: {},
	});
	const [creator, setCreator] = useState([]);
	const params = useParams();
	console.log(creator);
	useEffect(() => {
		getSingleShow(params.id).then((res) => {
			setShow(res.data);
			console.log("first api call");
		});
		getCrew(params.id).then((res) => {
			const crew = res.data;
			const result = crew.filter((crew) => crew.type === "Creator");
			setCreator(result);
			console.log(result);
		});
	}, [params.id]);

	return (
		<Row>
			<Col sm={12} md={6}>
				<img src={show.image.original} alt="" className="cover-img" />
			</Col>
			<Col sm={12} md={6}>
				<h2 className="show-name mb-5 text-center">{show.name}</h2>
				<Col className="text-center" sm={12}>
					{show.genres.map((genre) => (
						<Badge key={uuidv4()} variant="dark genres">
							{genre}
						</Badge>
					))}
				</Col>
				<Col sm={12} className="summary my-4">
					<Markup content={show.summary} />
				</Col>
				<Col className="show-info" sm={12}>
					<h2>Show Info</h2>
					<ul className="show-info-list">
						<li>
							<span className="show-info-bold-text">Network: </span>
							{show.network.name}
						</li>
						<li>
							<span className="show-info-bold-text">Runtime: </span>
							{show.runtime} minutes
						</li>
						<li>
							<span className="show-info-bold-text">Status: </span>
							{show.status}
						</li>
						<li>
							<span className="show-info-bold-text">Show Type: </span>
							{show.type}
						</li>
						<li>
							<span className="show-info-bold-text">
								Created by:
								{creator.map((creator) => {
									return (
										<span key={creator.person.id}>{creator.person.name}</span>
									);
								})}
							</span>
						</li>
					</ul>
				</Col>
			</Col>
		</Row>
	);
};

export default MainInfo;
