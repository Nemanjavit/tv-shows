import React from "react";
import { Col, Row } from "react-bootstrap";

const CastCard = ({ data }) => {
	return (
		<Col className="cast-card py-3" sm={6}>
			<Row>
				<Col sm={4}>
					<img src={data.person.image.medium} alt="actor" />
				</Col>
				<Col sm={8}>
					<span className="actor-name">{data.person.name}</span>
					<span>as</span>
					<span className="mx-2">{data.character.name}</span>
				</Col>
			</Row>
		</Col>
	);
};

export default CastCard;
