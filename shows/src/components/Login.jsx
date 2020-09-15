import React, { useState } from "react";
import styles from "../scss/Register.module.scss";
import { loginUser } from "./http-requestes";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
	const [login, setLogin] = useState({ email: "", password: "" });
	const [showAlert, setShowAlert] = useState(false);
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
		loginUser(login)
			.then((res) => {
				console.log(res);
				localStorage.setItem("token", res.data.accessToken);
				history.push("/shows");
			})
			.catch((err) => {
				setShowAlert(true);
			});
	};

	// styles
	const formStyles = classNames({
		[`${styles.register_form}`]: true,
		[`${styles.orange}`]: true,
	});
	const loginButton = classNames({
		[`${styles.register_button}`]: true,
		"my-5": true,
	});
	const warningStyles = classNames({
		"d-none": !showAlert,
		[`${styles.warning}`]: true,
	});
	return (
		<form onSubmit={submitHandler} className={formStyles}>
			<div className={warningStyles}>
				<FontAwesomeIcon
					icon={faExclamationTriangle}
					className={styles.triangle_dark}
				/>
				<p className="text-dark text-center py-2">
					You failed to login, make sure you are using correct email and
					passowrd!
				</p>
			</div>

			<h2 className={styles.form_heading}>Sign In</h2>
			<div className={styles.input_group}>
				<label htmlFor="email-login" className={styles.form_label}>
					Email
				</label>
				<input
					id="email-login"
					type="text"
					name="email"
					autoComplete="off"
					onChange={updateField}
					value={login.email}
					className={styles.input}
				/>
			</div>
			<div className={styles.input_group}>
				<label htmlFor="password-login" className={styles.form_label}>
					Password
				</label>
				<input
					id="password-login"
					className={styles.input}
					type="password"
					name="password"
					autoComplete="off"
					onChange={updateField}
					value={login.password}
				/>
			</div>
			<button className={loginButton} type="submit">
				Log In
			</button>
		</form>
	);
};

export default Login;
