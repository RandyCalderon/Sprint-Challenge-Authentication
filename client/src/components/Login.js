import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();

        const reqBody = {
            ...this.state
        }

        axios.post('http://localhost:5000/api/login', reqBody).then(res => {
            const token = res.data
            localStorage.setItem('jwt', token)
        }).catch(err => {
            console.log(err);
        })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                    <label htmlFor="username"></label><input name="username" value={this.state.username} onChange={this.inputHandler} type="text" id="username" />
                    </div>
                    <div>
                    <label htmlFor="password"></label><input name="password" value={this.state.password} onChange={this.inputHandler} type="password" id="password" />
                    </div>
                    <button type="submit">Login</button>
                </form>           
            </div>
        )
    }
}