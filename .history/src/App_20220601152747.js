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

import { Routes, Route, Link } from "react-router-dom";
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";

const link = from([
  new HttpLink({ uri: 'http://localhost:3003/graphql' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <Navigation /> */}
      <Container>
        <AllPosts />
        {/* <AllUsers /> */}
      </Container>
    </ApolloProvider>
  );
}

export default App;
