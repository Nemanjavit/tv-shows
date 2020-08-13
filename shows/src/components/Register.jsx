import React, { useState } from "react";
import { Form, Container, Col, Button } from "react-bootstrap";
import { registerUser } from "./http-requestes";
import { useHistory } from "react-router-dom";

const Register = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
		username: "",
		shows: [],
	});
	let history = useHistory();

	const updateField = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};
	const submitHandler = (e) => {
		e.preventDefault();
		console.log(user);
		registerUser(user).then((res) => {
			console.log(res.data);
			history.push("/login");
		});
	};
	return (
		<Container>
			<Col sm={6} className="center">
				<Form onSubmit={submitHandler}>
					<Form.Group controlId="formBasicUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="text"
							name="username"
							placeholder="Username"
							value={user.username}
							onChange={updateField}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							onChange={updateField}
							placeholder="Password"
							value={user.password}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							name="email"
							onChange={updateField}
							placeholder="Enter email"
							value={user.email}
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Button variant="outline-secondary button" type="submit" size="lg">
						Register
					</Button>
				</Form>
			</Col>
		</Container>
	);
};
export default Register;
