import axios from "axios";

const headers = { "Content-Type": "application/json" };

// register
export const registerUser = (user) => {
	return axios.post("http://localhost:3000/users", user, {
		headers: headers,
	});
};
// Login
export const loginUser = (login) => {
	return axios.post("http://localhost:3000/login", login, { headers: headers });
};
// patch User
export const patchUser = (id, data) => {
	return axios.patch(`http://localhost:3000/users/${id}`, data, {
		headers: headers,
	});
};
// get user info
export const getUserInfo = (id) => {
	return axios.get(`http://localhost:3000/users/${id}`);
};

// get shows
export const getShows = () => {
	return axios.get("http://api.tvmaze.com/shows");
};

// get single show
export const getSingleShow = (id) => {
	return axios.get(`http://api.tvmaze.com/shows/${id}?embed[]=seasons`);
};
// get episodes for specific show
export const getEpisodes = (id) => {
	return axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
};

export const getSeasons = (id) => {
	return axios.get(` http://api.tvmaze.com/shows/${id}/seasons`);
};

// get cast
export const getCast = (id) => {
	return axios.get(`http://api.tvmaze.com/shows/${id}/cast`);
};

export const getCrew = (id) => {
	return axios.get(`http://api.tvmaze.com/shows/${id}/crew`);
};
// search shows
export const searchShows = (query) => {
	return axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
};
