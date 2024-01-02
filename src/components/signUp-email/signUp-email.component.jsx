import { useState, useContext } from "react";
import { Input } from "../input-form/input.component.jsx";
import { createAuthWithEmailAndPassword, createUserDocumentFromAuth } from "../../firebase/firebase.db.js";
import "./signUp-email.style.scss";
import { Button } from "../buttons/buttons.component.jsx";
import { userContext } from "../context/user.context.jsx";


const defaultState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""

};



const EmailSignUp = () => {
    const [formValue, setvalue] = useState(defaultState);
    const { displayName, email, password, confirmPassword } = formValue;

    // const { changeState } = useContext(userContext);

    const reset = () => {
        setvalue(defaultState);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Password donot match");
            return;
        }

        try {
            const {user} = await createAuthWithEmailAndPassword(email, password);
            const userDoc2 = createUserDocumentFromAuth(user, { displayName });
            // changeState(user);
            reset();
            // console.log(user);

        } catch (error) {
            console.log("Error in creating the user account for the first time", error.message);

        }


    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setvalue({
            ...formValue,
            [name]: value
        });

    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Display Name"
                    type="text"
                    name="displayName"
                    value={displayName}
                    required
                    onChange={handleChange} />


                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={handleChange} />


                <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    required
                    onChange={handleChange} />


                <Input
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    required
                    onChange={handleChange} />
                <Button type="submit">SignUp</Button>
            </form>
        </div>
    );

}

export default EmailSignUp;