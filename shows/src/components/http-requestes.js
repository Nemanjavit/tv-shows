import axios from "axios";

const headers = { "Content-Type": "application/json" };

// register
export const registerUser = (user) => {
	return axios.post("http://localhost:3000/users", user, { headers: headers });
};
// Login
export const loginUser = (login) => {
	return axios.post("http://localhost:3000/login", login, { headers: headers });
};

// get shows
export const getShows = () => {
	return axios.get("http://api.tvmaze.com/shows");
};
