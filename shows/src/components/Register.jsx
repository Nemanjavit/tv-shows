import React, { useState } from "react";
import { registerUser } from "./http-requestes";
import classNames from "classnames";
import styles from "../scss/Register.module.scss";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = ({ handleSucces }) => {
	const [showAlert, setShowAlert] = useState(false);
	const [user, setUser] = useState({
		email: "",
		password: "",
		username: "",
		shows: [],
	});

	const updateField = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		// opening log in form if register is success
		registerUser(user)
			.then((res) => {
				handleSucces();
				setShowAlert(false);
				// clearing fields
				setUser({
					email: "",
					password: "",
					username: "",
				});
			})
			.catch((err) => {
				setShowAlert(true);
			});
	};

	// register button styles
	const regbtnStyle = classNames({
		"my-5": true,
		[`${styles.register_button}`]: true,
	});
	const warningStyles = classNames({
		"d-none": !showAlert,
		[`${styles.warning}`]: true,
	});

	return (
		<>
			<form onSubmit={submitHandler} className={styles.register_form}>
				<div className={warningStyles}>
					<FontAwesomeIcon
						icon={faExclamationTriangle}
						className={styles.triangle}
					/>
					<p className="text-danger text-center py-2">
						You failed to register, try using different username and make sure
						email is valid
					</p>
				</div>
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
