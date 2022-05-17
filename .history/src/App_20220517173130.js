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
        <AllPosts />
        <AllUsers />
    </ApolloProvider>
  );
}

export default App;
