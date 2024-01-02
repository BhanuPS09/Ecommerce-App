
import EmailSignUp from "../../components/signUp-email/signUp-email.component.jsx";
import EmailSignIn from "../../components/signIn-email/signIn.component";
import "./Auth.styles.scss";


const Auth = () => {

    return (
        <div className="authentication-container">
            <EmailSignIn/>
            <EmailSignUp />
        </div>

    );
}

export default Auth;