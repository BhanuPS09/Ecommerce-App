import { useState, useContext } from "react";
import { Input } from "../input-form/input.component.jsx";
import { signInAuthWithEmailAndPassword, createUserDocumentFromAuth } from "../../firebase/firebase.db.js";
import "./signIn-email.style.scss";
import { Button ,BUTTON_TYPE_CLASSES} from "../buttons/buttons.component.jsx";
import { signInWithGooglePopup } from "../../firebase/firebase.db.js";
// import { userContext } from "../parent/parent.component.jsx";

const defaultState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""

};



const EmailSignIn = () => {
    const [formValue, setvalue] = useState(defaultState);
    const { email, password } = formValue;

    // const { changeState } = useContext(userContext);

    const reset = () => {
        setvalue(defaultState);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthWithEmailAndPassword(email, password);
            reset();
            // changeState(user);

        } catch (error) {
            console.log(error);

        }

    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
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
            <h2>Already have an account?</h2>
            <span>SignIn with your email and password</span>
            <form onSubmit={handleSubmit}>


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

                <div className="buttons-container">
                    <Button type="submit">
                        SignIn
                    </Button>

                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>



            </form>
        </div>
    );

}

export default EmailSignIn;