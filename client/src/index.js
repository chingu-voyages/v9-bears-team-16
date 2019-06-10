import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import './index.css'
import App from './containers/App'

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/chris-czach-da7404/chingu-v9/dev',
  connectToDevTools: true
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
