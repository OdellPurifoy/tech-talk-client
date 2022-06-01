import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { gql } from 'apollo-boost';
import { Container } from 'react-bootstrap';
import AllUsers from './components/AllUsers';
import AllPosts from './components/AllPosts';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/layout/Navigation';



const link = from([
  new HttpLink({ uri: 'http://localhost:3001/graphql' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

const App = () => {
   return (
    <ApolloProvider client={client}>
      <Navigation />
      <Container>
        <AllPosts />
        {/* <AllUsers /> */}
      </Container>
    </ApolloProvider>
  )
};

export default App;
