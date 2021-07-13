import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PagenationContainer from '../containers/posts/PagenationContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PagenationContainer />
    </>
  );
};

export default PostListPage;
