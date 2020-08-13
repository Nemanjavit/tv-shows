import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CastCard = ({ data }) => {
	console.log(data);
	return (
		<Col className="cast-card py-3" sm={6}>
			<Row>
				<Col sm={4}>
					<img src={data.person.image.medium} alt="actor" />
				</Col>
				<Col sm={8}>
					<Link className="actor-name">{data.person.name}</Link>
					<span>as</span>
					<Link className="mx-2">{data.character.name}</Link>
				</Col>
			</Row>
		</Col>
	);
};

export default CastCard;
