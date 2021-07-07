import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import PostList from '../components/posts/PostList';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostList />
    </>
  );
};

export default PostListPage;
