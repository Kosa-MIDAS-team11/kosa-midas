import * as S from './HomeStyle';
import webBg from "../../assests/gif/webBg.jpg"
import { useState } from 'react';
import { adminSignInReq, userLogInReq, adminSecondAuthReq } from "../../hooks/auth/useLogin"

export default function Home() {
  const [isLoginOn, setIsLoginOn] = useState(false);
  const [isSigninOn, setIsSigninOn] = useState(false);
  const [isDoneSecAuth, setIsDoneSecAuth] = useState(false);
  const [pwd, setPwd] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNum, setPhoneNum] = useState(0);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

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
              ? isDoneSecAuth
                ? <>
                  <S.LoginInput type="text" onChange={(e) => { setUserName(e.target.value) }} placeholder='이름' />
                  <S.LoginInput type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='이메일' />
                  <S.LoginInput type="number" onChange={(e) => { setPhoneNum(e.target.value) }} placeholder='전화번호' />
                  <S.LoginInput type="password" onChange={(e) => { setPwd(e.target.value) }} placeholder='비밀번호' />
                </>
                : <S.LoginInput type="text" onChange={(e) => { setCode(e.target.value) }} placeholder='인증 코드' />
              : null
          }
        </S.DescriptWrap>
        <S.LoginWrap>
          <S.LoginBtn onClick={() => {
            setIsLoginOn(false);
            setIsSigninOn(true);
            if (isSigninOn) {
              if (isDoneSecAuth) {
                // userLogInReq(email, pwd);
              } else {
                setIsDoneSecAuth(adminSecondAuthReq(code)); // qwer1234
              }
            };
          }} style={{ backgroundColor: "#6E9024" }}>회원가입</S.LoginBtn>
          <S.LoginBtn onClick={() => {
            setIsSigninOn(false);
            setIsLoginOn(true);
            // if (isLoginOn) adminSignInReq(userName, email, pwd, phoneNum);
          }} style={{ backgroundColor: "#192F7E" }}>로그인</S.LoginBtn>
        </S.LoginWrap>
      </S.SideBar>
    </S.Container>
  )
}

