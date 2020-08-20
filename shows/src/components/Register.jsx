import React, { useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { registerUser } from "./http-requestes";
import { useHistory, Link } from "react-router-dom";

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
		<div className="reg-page full-height">
			<Col sm={3}>
				<Form onSubmit={submitHandler} className="register-form">
					<h2 className="register-form-heading text-center py-1">Sign Up</h2>
					<Form.Group
						bsPrefix="form-group register-form-group"
						controlId="formBasicUsername"
					>
						<Form.Label>Username</Form.Label>
						<Form.Control
							bsPrefix="form-control register-form-control"
							autoComplete="off"
							type="text"
							name="username"
							value={user.username}
							onChange={updateField}
						/>
					</Form.Group>
					<Form.Group
						bsPrefix="form-group register-form-group"
						controlId="formBasicPassword"
					>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							autoComplete="off"
							onChange={updateField}
							value={user.password}
							bsPrefix="form-control register-form-control"
						/>
					</Form.Group>
					<Form.Group
						bsPrefix="form-group register-form-group"
						controlId="formBasicEmail"
					>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							bsPrefix="form-control register-form-control"
							type="email"
							name="email"
							autoComplete="off"
							onChange={updateField}
							value={user.email}
						/>
					</Form.Group>
					<Link className="my-3 d-block" to="/login">
						Already have an account? Sign in
					</Link>

					<Button
						variant="outline-secondary button register-button"
						type="submit"
						size="lg"
					>
						Register
					</Button>
				</Form>
			</Col>
		</div>
	);
};
export default Register;
