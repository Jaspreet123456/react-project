import React, { Component } from 'react';
import Input from './input';
import Joi from 'joi-browser';
import { getEmployee } from './employee';

class Login extends Component {
    state = {
        account: { username: "", password: "" },
        errors: {},
        employee: getEmployee()
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    };

    validate = () => {
        const { options } = { abortEarly: false }
        const { error } = Joi.validate(this.state.account, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    }
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    login = () => {
        // const username = this.state.account.username
        // const password = this.state.account.password
        const employee = this.state.employee;
        const { account } = this.state;
        // const result = employee.filter(empData => {
        //     if (empData.firstName == account.username) {
        //         if (empData.password == account.password) {
        //             console.log("LoggedIn");
        //         } else {
        //             console.log("Password does not match");
        //         }
        //     } else {
        //         return console.log("email does not match");
        //     }
        //     return result;
        // }
        const res = employee.find(user => user.email === account.username)
        console.log(res)
        if (res) {
            if (res.password !== account.password) {
                console.log("Invalid");
            } else {
                this.props.history.push("/");
                console.log("logged In");
            }
        } else {
            console.log("invalid username");
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        // console.log("submitted")

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
                />
                <Input
                    name="password"
                    onChange={this.handleChange}
                    value={account.password}
                    label="Password"
                    error={errors.password}
                />
                <button
                    onClick={this.login()}
                    disabled={this.validate()}
                    className="btn btn-primary">Login</button>
            </form>
        </div>;
    }
}

export default Login;