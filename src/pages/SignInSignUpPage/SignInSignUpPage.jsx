import React from 'react';
import "./SignInSignUpStyles.scss";
import "../../components/SignIn/SignIn";
import SignIn from '../../components/SignIn/SignIn';
import SignUp from "../../components/SignUp/SignUp";

const SignInSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
        </div>
    );
};

export default SignInSignUpPage;