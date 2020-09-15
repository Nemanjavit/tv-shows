import React, { useState } from "react";
import styles from "../scss/Home.module.scss";
import Register from "./Register";
import Login from "./Login";
import { Container } from "react-bootstrap";
import classNames from "classnames";

const Home = () => {
	const [isOpenLogin, setisOpenLogin] = useState(false);

	const openLogin = () => {
		setisOpenLogin(true);
	};

	const openRegister = () => {
		setisOpenLogin(false);
	};
	const registerSuccess = () => {
		setisOpenLogin(true);
	};

	// Register form styles
	const signinClasses = classNames({
		[`${styles.divTwo}`]: true,
		[`${styles.close_divTwo}`]: true,
		[`${styles.open_divTwo}`]: isOpenLogin,
		[`${styles.form_active}`]: isOpenLogin,
	});
	// Sign in form styles
	const registerClasses = classNames({
		[`${styles.divOne}`]: true,
		[`${styles.form_active}`]: !isOpenLogin,
		[`${styles.open_divOne}`]: isOpenLogin,
	});
	// display area styles
	const displayClasses = classNames({
		"col-4": true,
		[`${styles.display}`]: true,
		[`${styles.pink}`]: isOpenLogin,
	});
	// login button styles
	const loginButtonStyles = classNames({
		[`${styles.button}`]: true,
		[`${styles.login}`]: true,
		[`${styles.login_show}`]: !isOpenLogin,
	});
	// register ButtonStyles
	const signupButtonStyles = classNames({
		[`${styles.button}`]: true,
		[`${styles.signup}`]: true,
		[`${styles.signup_show}`]: isOpenLogin,
	});

	return (
		<div className="home" style={{ backgroundColor: "#009FFD" }}>
			<Container>
				<div className="row justify-content-center vh-100 align-items-center">
					<div className={displayClasses}>
						<div className={registerClasses}>
							<Register handleSucces={registerSuccess} />
							<button className={loginButtonStyles} onClick={openLogin}>
								Log In
							</button>
						</div>

						<div className={signinClasses}>
							<Login />
							<button className={signupButtonStyles} onClick={openRegister}>
								Sign in
							</button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Home;
