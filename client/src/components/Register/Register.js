import styles from "./Register.module.css";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <>
            <h1>Registration Form</h1>
            <form >
                <div className={styles.container}>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <br />

                    <label htmlFor="email"><span>Email</span></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label htmlFor="psw"><span>Password</span></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                    <label htmlFor="psw-repeat"><span>Repeat Password</span></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                    <br />

                    <button type="submit" className={styles.registerbtn}>Register</button>

                <div className={[styles.container, styles.signin]}>
                    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
                </div>
                </div>
            </form>
        </>
    );
}