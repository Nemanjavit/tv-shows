import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import styles from "../scss/ShowCard.module.scss";

const ShowCard = ({ data, setFavoriteHandler }) => {
	const heart = <FontAwesomeIcon icon={faHeart} />;
	const star = <FontAwesomeIcon icon={faStar} />;

	return (
		<>
			<Link to={`/shows/${data.id}/main`}>
				<Card style={{ width: "100%" }} className={`${styles.card}`}>
					<div className={`${styles.cardImg}`}>
						{data.image ? (
							<img className="w-100" src={data.image.medium} />
						) : (
							<img className="w-100" src="https://dummyimage.com/348x488" />
						)}
					</div>

					<div className={`${styles.card_body}`}>
						<Card.Title className="text-center">{data.name}</Card.Title>
						<Row className={`${styles.card_subtitle}`}>
							<Col sm={6} className={`${styles.button_holder}`}>
								<button
									className={`${styles.favorites_button}`}
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
					</div>
				</Card>
			</Link>
		</>
	);
};
export default ShowCard;
