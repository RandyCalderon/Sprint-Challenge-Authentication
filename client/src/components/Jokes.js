import React, { Component } from 'react';
import axios from 'axios';
import { JokesWrapper, JokesBanner, JokesHeader, JokesFlex, Header, Body, JokeWrapper } from '../theme/css';

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
            <JokesWrapper>
                <JokesBanner><JokesHeader>Jokes of the Day</JokesHeader></JokesBanner>
                <JokesFlex>
                {this.state.jokes.map(joke => {
                    return(
                    <JokeWrapper key={joke.index}>
                    <Header key={joke.setup}>{joke.setup}</Header>
                    <Body key={joke.punchline}>{joke.punchline}</Body>
                    </JokeWrapper>
                    )
            })}
            </JokesFlex>
            </JokesWrapper>
        )
    }
}