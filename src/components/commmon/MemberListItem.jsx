import React from "react";
import {
  ListContainer,
  UserName,
  UserInfo,
  UserTeam,
  UserMail,
  WorkAtHomeWrap,
  WorkAtHome,
} from "./MemberListItem.style";

const MemberListItem = () => {
  return (
    <>
      <ListContainer>
        <UserName>심미진</UserName>
        <UserInfo>
          <UserTeam>개발 1팀</UserTeam>
          <UserMail>mijin.develop@gmail.com</UserMail>
        </UserInfo>
        <WorkAtHomeWrap>
          <WorkAtHome />
        </WorkAtHomeWrap>
      </ListContainer>
    </>
  );
};

export default MemberListItem;
