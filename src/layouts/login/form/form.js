import React, { Component } from "react";
import './form.css';

class Form extends React.Component {
    render() {
        return (
            <form>
                <div className="form">
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Log in</button>
                </div>
            </form>
        )
    }
}

export default Form;