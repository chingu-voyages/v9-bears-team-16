import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import './index.css'
import App from './containers/App'
import GraphQL from './components/graphql';

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/chris-czach-da7404/chingu-v9/dev',
  connectToDevTools: true
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/___graphql" component={GraphQL} />
        <App />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
