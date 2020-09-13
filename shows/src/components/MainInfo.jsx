import React from "react";
import { Row, Badge, Col, Container } from "react-bootstrap";
import classNames from "classnames";
import styles from "../scss/MainInfo.module.scss";
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

	useEffect(() => {
		getSingleShow(params.id).then((res) => {
			setShow(res.data);
		});
		getCrew(params.id).then((res) => {
			const crew = res.data;
			const result = crew.filter((crew) => crew.type === "Creator");
			setCreator(result);
		});
	}, [params.id]);

	// styles
	const coverImg = classNames({ [`${styles.cover_img}`]: true });
	// styles for summary text
	const summaryStyles = classNames({ [`${styles.summary}`]: true });

	return (
		<Container>
			<Row>
				<Col sm={12} md={6}>
					<img src={show.image.original} alt="" className={coverImg} />
				</Col>
				<Col sm={12} md={6}>
					<h2 className=" mb-5 text-center">{show.name}</h2>
					<Col className="text-center" sm={12}>
						{show.genres.map((genre) => (
							<Badge key={uuidv4()} variant="dark mx-1 genres">
								{genre}
							</Badge>
						))}
					</Col>
					<Col sm={12} className={summaryStyles}>
						<Markup content={show.summary} />
					</Col>
					<Col className="show-info" sm={12}>
						<h2>Show Info</h2>
						<ul className="show-info-list">
							<li>
								<span className={`${styles.show_info_text}`}>Network: </span>
								{show.network.name}
							</li>
							<li>
								<span className={`${styles.show_info_text}`}>Runtime: </span>
								{show.runtime} minutes
							</li>
							<li>
								<span className={`${styles.show_info_text}`}>Status: </span>
								{show.status}
							</li>
							<li>
								<span className={`${styles.show_info_text}`}>Show Type: </span>
								{show.type}
							</li>
							<li>
								<span className={`${styles.show_info_text}`}>Created by:</span>
								{creator.map((creator) => {
									return (
										<span key={creator.person.id}>{creator.person.name}</span>
									);
								})}
							</li>
						</ul>
					</Col>
				</Col>
			</Row>
		</Container>
	);
};

export default MainInfo;
