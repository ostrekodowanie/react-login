import React, { Component } from 'react';
import Form from './form/form.js';
import './sass/login.css';

class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Login to your <span>account</span></h1>
                <Form />
                <a className="forgot-password" href="">Forgot your password?</a>
                <small className="sign-up">Don't have an account? <a href="">Sign up</a></small>
            </div>
        )
    }
}

export default Login;