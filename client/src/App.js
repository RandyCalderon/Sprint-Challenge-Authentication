// Dependencies
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// CSS Styling
import { AppWrapper } from './theme/css';

// Components
import Register from './components/Register';
import Login from './components/Login';
import Jokes from './components/Jokes';

// Looks at inheritance with emotion etc. Doing AppWrapper doesn't apply the styling the way I wanted to Jokes component and causes issues with flex and wrapping. Had to make a JokeWrapper exclusively for that content, maybe render and wrapping with AppWrapper would've fixed that?

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
