import React from 'react'
import GraphiQL from 'graphiql'
import '../../../node_modules/graphiql/graphiql.css'

export default function GraphQL() {
  return (
    <div style={{ height: '100vh' }}>
      <GraphiQL fetcher={graphQLFetcher} />
    </div>
  )
}

const graphQLFetcher = graphQLParams => {
  return fetch('https://us1.prisma.sh/chris-czach-da7404/chingu-v9/dev', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json())
}
