import * as S from './LoginStyle';
import { Link } from 'react-router-dom';
import { ReactComponent as SvgProfile } from '../../assests/icon/profile.svg';
export default function Login() {
  return (
    <S.Container>
      <S.LoginWrap>
        <S.PlaceWrap>
          <SvgProfile width="52" height="52" />
          <S.LoginText>로그인</S.LoginText>
        </S.PlaceWrap>
        <S.PlaceWrap>
          <S.LoginInput placeholder='아이디' />
          <S.LoginInput placeholder='비밀번호' />
        </S.PlaceWrap>
        <S.LoginBtn><Link to="/division">로그인</Link></S.LoginBtn>
        <S.NoAuth>계정이 없으신가요?</S.NoAuth>
      </S.LoginWrap>
    </S.Container>
  )
}

