import React from 'react';
import "./SignInSignUpStyles.scss";
import "../../components/SignIn/SignIn";
import SignIn from '../../components/SignIn/SignIn';


const SignInSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
          <SignIn />
        </div>
    );
};

export default SignInSignUpPage;