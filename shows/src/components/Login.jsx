import React, { useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { loginUser } from "./http-requestes";
import { useHistory } from "react-router-dom";

const Login = () => {
	const [login, setLogin] = useState({ email: "", password: "" });
	let history = useHistory();

	const updateField = (e) => {
		setLogin({
			...login,
			[e.target.name]: e.target.value,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(login);
		loginUser(login).then((res) => {
			console.log(res);
			localStorage.setItem("token", res.data.accessToken);
			history.push("/shows");
		});
	};
	return (
		<Container>
			<Col sm={6} className="center">
				<Form onSubmit={submitHandler}>
					<Form.Group controlId="formBasicUsername">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="text"
							name="email"
							placeholder="Username"
							onChange={updateField}
							value={login.email}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="text"
							name="password"
							placeholder="Username"
							onChange={updateField}
							value={login.password}
						/>
					</Form.Group>
					<Button variant="outline-secondary button" type="submit" size="lg">
						Register
					</Button>
				</Form>
			</Col>
		</Container>
	);
};

export default Login;
