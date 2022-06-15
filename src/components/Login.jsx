import React, { Component } from 'react';
import Input from './input';
import { Joi } from 'joi-browser';

class Login extends Component {
    state = {
        account: { username: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    };

    validate = () => {
        const result = Joi.validate(this.state.account, this.schema, {
            abortEarly: false
        });
        console.log(result)
    }
    validateProperty = (name, value) => {
        if (name === 'username') {
            if (value.trim() === '') return "Username is required";
        }
        if (name === 'password') {
            if (value.trim() === '') return "Password is required";
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        console.log("submitted")
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name]
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account, errors });
    }
    render() {
        const { account, errors } = this.state;
        return <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <Input
                    name="username"
                    onChange={this.handleChange}
                    value={account.username}
                    label="Username"
                    error={errors.username}
                    type="text"
                />
                <Input
                    name="password"
                    onChange={this.handleChange}
                    value={account.password}
                    label="Password"
                    error={errors.password}
                    type="password"
                />
                <button className="btn btn-primary">Login</button>
            </form>
        </div>;
    }
}

export default Login;