import React from "react";
import { Card, Col } from "react-bootstrap";

const ShowCard = ({ data }) => {
	console.log(data);
	return (
		<Col sm={4} className="my-2">
			<Card style={{ width: "100%" }}>
				<Card.Img variant="top" src={data.image.medium} />
				<Card.Body>
					<Card.Title>{data.name}</Card.Title>
				</Card.Body>
			</Card>
		</Col>
	);
};
export default ShowCard;
