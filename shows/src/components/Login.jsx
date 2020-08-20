import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
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
		<div className="full-height reg-page">
			<Col sm={3} className="center">
				<Form onSubmit={submitHandler} className="register-form">
					<h2 className="register-form-heading text-center py-1">Log In</h2>
					<Form.Group
						controlId="formBasicUsername"
						bsPrefix="form-group register-form-group"
					>
						<Form.Label>Email</Form.Label>
						<Form.Control
							bsPrefix="form-control register-form-control"
							type="text"
							name="email"
							autoComplete="off"
							onChange={updateField}
							value={login.email}
						/>
					</Form.Group>
					<Form.Group
						controlId="formBasicPassword"
						bsPrefix="form-group register-form-group"
					>
						<Form.Label>Password</Form.Label>
						<Form.Control
							bsPrefix="form-control register-form-control"
							type="password"
							name="password"
							autoComplete="off"
							onChange={updateField}
							value={login.password}
						/>
					</Form.Group>
					<Button
						variant="outline-secondary button register-button"
						type="submit"
						size="lg"
					>
						Log In
					</Button>
				</Form>
			</Col>
		</div>
	);
};

export default Login;
