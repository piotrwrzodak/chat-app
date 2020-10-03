import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ApolloProvider from './ApolloProvider';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

import './App.scss';

function App() {
  return (
    <ApolloProvider>
      <Router>
        <Container className="pt-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
