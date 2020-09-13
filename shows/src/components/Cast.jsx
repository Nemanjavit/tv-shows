import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "./http-requestes";
import CastCard from "./CastCard";
import { Container, Row } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars";

const Cast = () => {
	const params = useParams();
	const [cast, setCast] = useState([]);

	useEffect(() => {
		getCast(params.id).then((res) => {
			setCast(res.data);
		});
	}, [params.id]);

	return (
		<Container>
			<Scrollbars style={{ width: "100%", height: "90vh" }}>
				<h2>Cast</h2>
				<Row>
					{cast.map((actor) => (
						<CastCard key={actor.person.id} data={actor} />
					))}
				</Row>
			</Scrollbars>
		</Container>
	);
};

export default Cast;
