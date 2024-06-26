import React from 'react';
import './SignInForm.style.css';
import AuthInput from '../../../common/Authenticate/AuthInput/AuthInput';
import { useNavigate } from 'react-router-dom';
import AuthTextBtn from '../../../common/Authenticate/AuthTextBtn/AuthTextBtn';

const SignInForm = ({ setEmail, email, setPassword, password }) => {
  const navigate = useNavigate();

  const naviateToSignUP = () => {
    navigate(`/auth/signup`);
  };
  const navigateToPassword = () => {
    navigate(`/auth/password`);
  };

  const emailProps = {
    type: 'email',
    placeholder: '이메일',
    handleSetValue: (e) => setEmail(e.target.value),
    defaultValue: email ? email : "",
  };

  const passwordProps = {
    type: 'password',
    placeholder: '비밀번호',
    handleSetValue: (e) => setPassword(e.target.value),
    defaultValue: password ? password : "",
  };

  return (
    <div className="input_sign_up_wrapper">
      <AuthInput {...emailProps} />
      <AuthInput {...passwordProps} />
      <div
        className="sign_up_wrapper"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className="join-text-wrap">
          <div>
            <AuthTextBtn onClick={naviateToSignUP}>회원가입</AuthTextBtn>
          </div>
          <div className="bar-wrap">|</div>
          <div>
            <AuthTextBtn onClick={navigateToPassword}>
              비밀번호 재발급
            </AuthTextBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
