import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_POSTS } from '../graphql/queries/getAllPosts';

function AllPosts() {
  const { data } = useQuery(GET_ALL_POSTS);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
        setPosts(data.posts);
    }
  }, [data]);

  return (
    <div>
    {" "}
      {posts.map((val) => {
        return <h1> {val.title}</h1>;
    })}
    </div>
  )
}

export default AllPosts;