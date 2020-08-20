import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ShowCard = ({ data, setFavoriteHandler }) => {
	const heart = <FontAwesomeIcon icon={faHeart} />;
	const star = <FontAwesomeIcon icon={faStar} />;

	return (
		<>
			<Link to={`/shows/${data.id}/main`}>
				<Card style={{ width: "100%" }} className="h-100">
					{data.image ? (
						<Card.Img variant="top" src={data.image.medium} />
					) : (
						<Card.Img variant="top" src="https://dummyimage.com/348x488" />
					)}

					<Card.Body>
						<Card.Title className="text-center">{data.name}</Card.Title>
						<Row className="card-subtitle">
							<Col sm={6} className="button-holder">
								<button
									className="favorites-button"
									onClick={setFavoriteHandler}
								>
									{heart}
								</button>
							</Col>
							<Col sm={6}>
								<div className="rating text-center">
									<span className="rating-star">{star}</span>
									<span className="rating-number">{data.rating.average}</span>
								</div>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Link>
		</>
	);
};
export default ShowCard;
