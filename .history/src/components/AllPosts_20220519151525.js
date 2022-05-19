import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_POSTS } from '../graphql/queries/getAllPosts';
import Post from './components/posts/Post.js';


function AllPosts() {
  const { data } = useQuery(GET_ALL_POSTS);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (data) {
        setPosts(data.posts);
    }
  }, [data]);

  return (
    <div>
      {posts.map((val) => {
        return <Post title={val.title} body={val.body} />;
    })}
    </div>
  )
}

export default AllPosts;