import * as S from './HomeStyle';
import webBg from "../../assests/gif/webBg.jpg"
import { useState } from 'react';
import { userLogInReq, userSignInReq } from "../../hooks/auth/useLogin"
import { useNavigate } from "react-router-dom";

export default function HomeUser() {
  const [isLoginOn, setIsLoginOn] = useState(false);
  const [isSigninOn, setIsSigninOn] = useState(false);
  const [pwd, setPwd] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNum, setPhoneNum] = useState(0);
  const [email, setEmail] = useState("");
  const [dId, setDId] = useState("");
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.BackgroundLinear />
      <S.BackWrap>
        <S.BackgroundImg src={webBg} />
      </S.BackWrap>
      <S.ExplaneWrap>
        <S.Title>With Office</S.Title>
        <S.SubTitle>유연근무제를 하나의 서비스에서</S.SubTitle>
      </S.ExplaneWrap>
      <S.SideBar>
        <S.DescriptWrap>
          <S.Descript>직원은 간단하게</S.Descript>
          <S.Descript>회사는 통계적이게</S.Descript>
          {
            isLoginOn
              ? <>
                <S.LoginInput type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='이메일' />
                <S.LoginInput type="password" onChange={(e) => { setPwd(e.target.value) }} placeholder='비밀번호' />
              </> : null
          }
          {
            isSigninOn
              ? <>
                <S.LoginInput type="text" onChange={(e) => { setUserName(e.target.value) }} placeholder='이름' />
                <S.LoginInput type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='이메일' />
                <S.LoginInput type="number" onChange={(e) => { setPhoneNum(e.target.value) }} placeholder='전화번호' />
                <S.LoginInput type="password" onChange={(e) => { setPwd(e.target.value) }} placeholder='비밀번호' />
                <S.LoginInput type="text" onChange={(e) => { setDId(e.target.value) }} placeholder='회사 아이디' />
              </>
              : null
          }
        </S.DescriptWrap>
        <S.LoginWrap>
          <S.LoginBtn onClick={() => {
            setIsLoginOn(false);
            setIsSigninOn(true);
            if (isSigninOn) {
              userSignInReq(userName, email, pwd, phoneNum, dId);
            };
          }} style={{ backgroundColor: "#6E9024" }}>회원가입</S.LoginBtn>
          <S.LoginBtn onClick={() => {
            setIsSigninOn(false);
            setIsLoginOn(true);
            if (isLoginOn) {
              userLogInReq(email, pwd).then((result) => {
                if (result) {
                  navigate("/mypage");
                }
              })
            };
          }} style={{ backgroundColor: "#192F7E" }}>로그인</S.LoginBtn>
        </S.LoginWrap>
      </S.SideBar>
    </S.Container>
  )
}

