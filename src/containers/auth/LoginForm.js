import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  // 인풋 변경 이벤트 헨들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  // 폼 이벤트 등록 핸들러
  const onSubmit = (e) => {
    e.preventDefault();

    // 구현 예정
  };

  // 컴포넌트가 처음 렌더링될 때 form 초기화
  // 로그인 페이지에서 값을 입력한 뒤 다른 페이지로 이동 후 다시 돌아왔을 때 값이 유지되지 않도록 함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
