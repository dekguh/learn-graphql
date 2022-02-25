import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './components/utils/graphql'
import HomePage from './components/UI/HomePage'

function App() {
  return (
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  )
}

export default App;
