import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_USERS } from '../graphql/queries/getAllUsers';
import { Container } from 'react-bootstrap';

function AllUsers() {
  const { data } = useQuery(GET_ALL_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]);

  return (
    <Container>
        {" "}
        {users.map((val) => {
            return <h1> {val.firstName}</h1>;
        })}
    </Container>
  )
}

export default AllUsers;