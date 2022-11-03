import { HeaderContainer, Title } from "./Header.style";
import { ReactComponent as SvgArrowLeft } from '../../assests/icon/arrowLeft.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <SvgArrowLeft onClick={() => { history.back() }} width="36" height="36" style={{ padding: "6px", marginLeft: "32px", cursor: "pointer" }} />
      <Title>With Office</Title>
    </HeaderContainer>
  );
};

export default Header;
