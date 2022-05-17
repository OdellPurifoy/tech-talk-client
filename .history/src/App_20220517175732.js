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
import { Container, Navbar } from 'react-bootstrap';
import AllUsers from './components/AllUsers';
import AllPosts from './components/AllPosts';
import 'bootstrap/dist/css/bootstrap.css';

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
        <Navbar bg='dark'>

        </Navbar>
      <Container>
        <AllPosts />
        <AllUsers />
      </Container>
    </ApolloProvider>
  );
}

export default App;
