import React, { Component } from "react";
import './form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            valid: false
        }
        this.checkValidation = this.checkValidation.bind(this);
    }
    checkValidation() {
        this.setState(this.state.valid = true)
    }
    render() {
        return (
            <form>
                <div className="form">
                    <input type="text" name="username" onChange={this.checkValidation} placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Log in</button>
                </div>
            </form>
        )
    }
}

export default Form;