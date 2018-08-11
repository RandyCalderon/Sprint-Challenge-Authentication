import React, { Component } from 'react';
import axios from 'axios';
import { Header, JokeWrapper } from '../theme/css';

export default class Jokes extends Component {
    state = {
        jokes: []
    }

    componentDidMount() {
        const token = localStorage.getItem('jwt')

        const requestOptions = {
            headers: { 
                Authorization: token
            }
        }

        axios.get('http://localhost:5000/api/jokes', requestOptions).then(res => {
            this.setState({jokes: res.data})
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return(
            <div>
                {this.state.jokes.map(joke => {
                    return(
                    <JokeWrapper key={joke.id}>
                    <Header key={joke.id}>{joke.setup}</Header>
                    <p key={joke.id}>{joke.punchline}</p>
                    </JokeWrapper>
                    )
            })}
            </div>
        )
    }
}