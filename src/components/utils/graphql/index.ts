import {
    ApolloClient,
    InMemoryCache,
  } from '@apollo/client'

  export const client = new ApolloClient({
    uri: 'https://rental-motoran.herokuapp.com/graphql',
    cache: new InMemoryCache()
  });