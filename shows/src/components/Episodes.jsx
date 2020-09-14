import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import classNames from "classnames";
import styles from "../scss/Episodes.module.scss";
import { useParams, useLocation } from "react-router-dom";
import { getEpisodes, getSeasons } from "./http-requestes";
import { Scrollbars } from "react-custom-scrollbars";

const Episodes = () => {
	const [episodes, setEpisodes] = useState([]);
	const [seasons, setSeasons] = useState([]);
	let params = useParams();
	let location = useLocation();
	console.log(`episode params: ${params.id}`);

	useEffect(() => {
		getEpisodes(params.id).then((res) => {
			setEpisodes(res.data);
		});
		getSeasons(params.id).then((res) => {
			setSeasons(res.data);
		});
	}, [params.id, location]);

	return (
		<>
			<Container>
				{seasons &&
					[...Array(seasons.length)].map((e, i) => {
						return (
							<div key={i}>
								<h3 className="text-left">Seasons {i + 1}</h3>
								<Table striped bordered hover key={i}>
									<thead className={`${styles.table_header}`}>
										<tr>
											<th>Episode number</th>
											<th>Date</th>
											<th>Name</th>
										</tr>
									</thead>
									<tbody>
										{episodes.map((episode) => {
											if (episode.season === i + 1) {
												return (
													<tr key={episode.id}>
														<td>{episode.number}</td>
														<td>{episode.airdate}</td>
														<td>{episode.name}</td>
													</tr>
												);
											}
										})}
									</tbody>
								</Table>
							</div>
						);
					})}
			</Container>
		</>
	);
};

export default Episodes;
