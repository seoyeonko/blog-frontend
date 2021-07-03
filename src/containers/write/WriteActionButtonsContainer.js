import React, { useEffect } from 'react';
import WriteActionButton from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
  }));

  // 포스트 등록
  const onPublish = () => {
    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    history.goBack(); // 브라우저에서 뒤로가기
  };

  // 성공 혹은 실패시 할 작업
  useEffect(() => {
    // 성공
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`); // 서버에서 응답한 포스트 정보의 _id와 username 값을 참조해 포스트를 읽을 수 있는 경로로 이동
    }
    // 실패
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);

  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonsContainer);
