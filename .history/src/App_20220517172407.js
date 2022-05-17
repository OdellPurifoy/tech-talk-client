import React from 'react';
import {
  ApolloClient,
  // createHttpLink,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { gql } from 'apollo-boost';
import AllUsers from './components/AllUsers';
import AllPosts from './components/AllPosts';
import { Container } from 'react-bootstrap';
// import { onError } from '@apollo/client/link/error';

const link = from([
  new HttpLink({ uri: 'http://localhost:3003/graphql' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <AllPosts />
        <AllUsers />
      </Container>
    </ApolloProvider>
  );
}

export default App;
