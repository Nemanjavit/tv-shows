import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEpisodes, getSeasons } from "./http-requestes";
import { Table } from "react-bootstrap";

const Episodes = () => {
	const [episodes, setEpisodes] = useState([]);
	const [seasons, setSeasons] = useState([]);
	let params = useParams();
	console.log(episodes);
	useEffect(() => {
		getEpisodes(params.id).then((res) => {
			setEpisodes(res.data);
		});
		getSeasons(params.id).then((res) => {
			setSeasons(res.data);
		});
	}, [params.id]);

	return (
		<>
			{seasons &&
				[...Array(seasons.length)].map((e, i) => {
					return (
						<div key={i}>
							<h3 className="text-left">Seasons {i + 1}</h3>
							<Table striped bordered hover key={i}>
								<thead className="table-header">
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
		</>
	);
};

export default Episodes;
