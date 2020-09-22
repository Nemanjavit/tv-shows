import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import styles from "../scss/ShowCard.module.scss";
import classNames from "classnames";

const ShowCard = ({ data, setFavoriteHandler, removeFavoriteHandler }) => {
	const star = <FontAwesomeIcon icon={faStar} />;
	let location = useLocation();

	const cardHeadingStyles = classNames({
		"text-center": true,
		card_heading: true,
	});

	return (
		<>
			<Link to={`/shows/${data.id}/main`}>
				<Card style={{ width: "100%" }} className={`${styles.card}`}>
					<div className={`${styles.cardImg}`}>
						{data.image ? (
							<img className="w-100" alt="cover" src={data.image.medium} />
						) : (
							<img
								className="w-100"
								alt="cover"
								src="https://dummyimage.com/348x488"
							/>
						)}
					</div>

					<div className={`${styles.card_body}`}>
						<Card.Title className={cardHeadingStyles}>{data.name}</Card.Title>
						<Row className={`${styles.card_subtitle}`}>
							<Col sm={6} className="d-flex justify-content-center">
								{location.pathname === "/favorites" ? (
									<button
										onClick={removeFavoriteHandler}
										className={`${styles.favorites_button}`}
									>
										<FontAwesomeIcon
											icon={faHeartBroken}
											className={styles.heartFront}
										/>
										<FontAwesomeIcon
											icon={faHeartBroken}
											className={styles.heartBehind}
										/>
									</button>
								) : (
									<button
										className={`${styles.favorites_button}`}
										onClick={setFavoriteHandler}
									>
										<FontAwesomeIcon
											icon={faHeart}
											className={styles.heartFront}
										/>
										<FontAwesomeIcon
											icon={faHeart}
											className={styles.heartBehind}
										/>
									</button>
								)}
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
