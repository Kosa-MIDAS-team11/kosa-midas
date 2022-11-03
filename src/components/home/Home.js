import * as S from './HomeStyle';
import webBg from "../../assests/gif/webBg.jpg"
import { useState } from 'react';

export default function Home() {
  const [isLoginOn, setIsLoginOn] = useState(false);
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const loginFunction = (isSign) => {
    if (isLoginOn) {
      if (id !== "" && pwd !== "") {
        if (isSign) { // isSign true면 회원가입 false면 로그인
          console.log(id, pwd);
        }
      }
    } else setIsLoginOn(true);
  }

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
                <S.LoginInput onChange={(e) => { setId(e.target.value) }} placeholder='아이디' />
                <S.LoginInput onChange={(e) => { setPwd(e.target.value) }} placeholder='비밀번호' />
                {/* <S.LoginInput placeholder='2차인증' /> */}
              </> : null
          }
        </S.DescriptWrap>
        <S.LoginWrap>
          <S.LoginBtn onClick={() => { loginFunction(true) }} style={{ backgroundColor: "#6E9024" }}>회원가입</S.LoginBtn>
          <S.LoginBtn onClick={() => { loginFunction(false) }} style={{ backgroundColor: "#192F7E" }}>로그인</S.LoginBtn>
        </S.LoginWrap>
      </S.SideBar>
    </S.Container>
  )
}

