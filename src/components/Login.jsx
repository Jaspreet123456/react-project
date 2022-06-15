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
                    label="Username"
                    onChange={this.handleChange}
                    value={account.username}
                    name="sername"
                />
                <Input
                    label="Password"
                    onChange={this.handleChange}
                    value={account.password}
                    name="password"
                />
                <button className="btn btn-primary">Login</button>
            </form>
        </div>;
    }
}
export default Login;