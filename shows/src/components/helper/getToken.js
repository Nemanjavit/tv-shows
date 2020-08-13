var jwtDecode = require("jwt-decode");

export const getToken = () => {
	return localStorage.getItem("token");
};

export const userId = () => {
	const token = getToken();
	var decoded = jwtDecode(token);
	let id = parseInt(decoded.sub);
	return id;
};
