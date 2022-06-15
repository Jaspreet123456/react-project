import React, { Component } from 'react';
import Input from './input';

class Login extends Component {
    state = {
        account: { username: "", password: "" }
    }

    handleSubmit = e => {
        e.preventDefault();
        const username = this.username.current.value;
        console.log("Submitted");
    };

    handleChange = ({ currentTarget: input }) => {
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
    }
    render() {
        const { account } = this.state;
        return <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <Input
                    name="sername"
                    onChange={this.handleChange}
                    value={account.username}
                    label="Username"
                />
                <Input
                    name="password"
                    onChange={this.handleChange}
                    value={account.password}
                    label="Password"
                />
                <button className="btn btn-primary">Login</button>
            </form>
        </div>;
    }
}
export default Login;