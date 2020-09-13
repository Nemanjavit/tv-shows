import React, { useState } from "react";
import { registerUser } from "./http-requestes";
import { Alert } from "react-bootstrap";
import classNames from "classnames";
import styles from "../scss/Register.module.scss";

const Register = (props, handleSucces) => {
	const [user, setUser] = useState({
		email: "",
		password: "",
		username: "",
		shows: [],
	});
	const [showalert, setShowalert] = useState(false);

	const updateField = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const errorHandler = () => {
		return <p className="text-white">Registration failed!</p>;
	};
	const submitHandler = (e) => {
		e.preventDefault();
		// opening log in form if register is success
		registerUser(user)
			.then((res) => {
				props.handleSucces();
				// clearing fields
				setUser({
					email: "",
					password: "",
					username: "",
				});
			})
			.catch((err) => {
				setShowalert(true);
				console.log(err, "this is error log");
			});
	};

	// register button styles
	const regbtnStyle = classNames({
		"my-5": true,
		[`${styles.register_button}`]: true,
	});
	return (
		<>
			<form onSubmit={submitHandler} className={styles.register_form}>
				{showalert ? errorHandler() : null}
				<h2 className={styles.form_heading}>Sign Up</h2>
				<div className={styles.input_group}>
					<label htmlFor="username" className={styles.form_label}>
						Username
					</label>
					<input
						id="username"
						className={styles.input}
						autoComplete="off"
						type="text"
						name="username"
						value={user.username}
						onChange={updateField}
					/>
				</div>
				<div className={styles.input_group}>
					<label htmlFor="password" className={styles.form_label}>
						Password
					</label>
					<input
						id="password"
						type="password"
						name="password"
						autoComplete="off"
						onChange={updateField}
						value={user.password}
						className={styles.input}
					/>
				</div>
				<div className={styles.input_group}>
					<label className={styles.form_label} htmlFor="email">
						Email address
					</label>
					<input
						id="email"
						className={styles.input}
						type="email"
						name="email"
						autoComplete="off"
						onChange={updateField}
						value={user.email}
					/>
				</div>

				<button className={regbtnStyle} type="submit">
					Register
				</button>
			</form>
		</>
	);
};
export default Register;
