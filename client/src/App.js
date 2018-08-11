// Dependencies
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { AppWrapper } from './theme/css';

// Components
import Register from './components/Register';
import Login from './components/Login';
import Jokes from './components/Jokes';


class App extends Component {
  render() {
    return (
        <AppWrapper>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/jokes' component={Jokes} />
        </AppWrapper>
    );
  }
}

export default App;
