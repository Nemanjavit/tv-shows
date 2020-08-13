import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "./http-requestes";
import CastCard from "./CastCard";
import { Row } from "react-bootstrap";

const Cast = () => {
	const params = useParams();
	const [cast, setCast] = useState([]);
	// console.log(cast);
	useEffect(() => {
		getCast(params.id).then((res) => {
			setCast(res.data);
		});
	}, [params.id]);

	return (
		<div>
			<h2>Cast</h2>
			<Row>
				{cast.map((actor) => (
					<CastCard key={actor.person.id} data={actor} />
				))}
			</Row>
		</div>
	);
};

export default Cast;
