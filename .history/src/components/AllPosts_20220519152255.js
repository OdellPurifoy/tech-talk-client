import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_POSTS } from '../graphql/queries/getAllPosts';
import Post from './posts/Post';

function AllPosts() {
  const { data } = useQuery(GET_ALL_POSTS);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (data) {
      console.log(data)
        setPosts(data.posts);
    }
  }, [data]);

  return (
    <div>
      {posts.map((post) => {
        return <Post title={post.title} body={post.body} />;
    })}
    </div>
  )
}

export default AllPosts;