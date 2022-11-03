import React from "react";
import Header from "../commmon/Header";
import {
  MemberWrap,
  MemberAnalysis,
  MemberInfoContainer,
  MemberNameWrap,
  MemberName,
  MemberInnerWrap,
  MemberTeamWrap,
  MemberTeam,
  TeamName,
  MemberMailWrap,
  MemberMail,
  MailAddress,
  MemberBtnWrap,
  InfoChange,
  TeamChange,
  OfficeStatusWrap,
  WorkAtHome,
  WorkAtOffice,
} from "./My.style";

const My = () => {
  return (
    <>
      <Header />
      <MemberWrap>
        <MemberAnalysis></MemberAnalysis>
        <MemberInfoContainer>
          <MemberNameWrap>
            <MemberName>심미진</MemberName>
          </MemberNameWrap>
          <MemberInnerWrap>
            <MemberTeamWrap>
              <MemberTeam>소속</MemberTeam>
              <TeamName>개발 1팀</TeamName>
            </MemberTeamWrap>
            <MemberMailWrap>
              <MemberMail>mail</MemberMail>
              <MailAddress>mijin.develop@gmail.com</MailAddress>
            </MemberMailWrap>
          </MemberInnerWrap>
          <MemberBtnWrap>
            <InfoChange>내 정보 편집</InfoChange>
            <TeamChange>부서 변경</TeamChange>
          </MemberBtnWrap>
          <OfficeStatusWrap>
            <WorkAtHome>
              재택 근무 신청
              <p>팀장님, 조금만 쉬다 바로 올게요 ㅠ</p>
            </WorkAtHome>
            <WorkAtOffice>
              출근
              <p>팀장님, 저 자리에 도착했습니다!</p>
            </WorkAtOffice>
          </OfficeStatusWrap>
        </MemberInfoContainer>
      </MemberWrap>
    </>
  );
};

export default My;
