import React, { useEffect, useState } from "react";
import Header from "../commmon/Header";
import Graph from "../graph/Graph";
import { ReactComponent as SvgCross } from '../../assests/icon/cross.svg';

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
  EditInfo,
  OfficeStatusWrap,
  WorkAtHome,
  WorkAtOffice,
  WorkHomeReqBg,
  WorkHomeReq,
  WorkHomeReqTitle,
  ModalHeader,
  ModalContent,
  ModalDateInput,
  DateSetting,
  ModalReqBtn,
  ModalReqBtnWrap
} from "./My.style";

const My = () => {
  const [onHomeModal, setOnHomeModal] = useState(false);
  const [onOutModal, setOnOutModal] = useState(false);
  const [code, setCode] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  useEffect(() => {
    console.log(startDate, endDate);
  }, [startDate, endDate])
  return (
    <>
      <Header />
      {
        onOutModal
          ? <WorkHomeReqBg>
            <WorkHomeReq>
              <ModalHeader>
                <WorkHomeReqTitle>재택 근무 신청</WorkHomeReqTitle>
                <SvgCross onClick={() => { setOnOutModal(false) }} style={{ cursor: "pointer" }} width="36" height="36" fill="white" />
              </ModalHeader>
              <ModalContent>
                <DateSetting>
                  <h1>시작일</h1>
                  <ModalDateInput onChange={(e) => { setStartDate(e.target.value) }} type={"date"} />
                </DateSetting>
                <DateSetting>
                  <h1>종료일</h1>
                  <ModalDateInput onChange={(e) => { setEndDate(e.target.value) }} type={"date"} />
                </DateSetting>
                <ModalReqBtnWrap>
                  <ModalReqBtn>신청</ModalReqBtn>
                </ModalReqBtnWrap>
              </ModalContent>
            </WorkHomeReq>
          </WorkHomeReqBg> : null
      }
      {
        onHomeModal
          ? <WorkHomeReqBg>
            <WorkHomeReq>
              <ModalHeader>
                <WorkHomeReqTitle>출근 확인</WorkHomeReqTitle>
                <SvgCross onClick={() => { setOnHomeModal(false) }} style={{ cursor: "pointer" }} width="36" height="36" fill="white" />
              </ModalHeader>
              <ModalContent>
                <DateSetting>
                  <h1>코드</h1>
                  <ModalDateInput onChange={(e) => { setCode(e.target.value) }} type={"text"} />
                </DateSetting>
                <ModalReqBtnWrap>
                  <ModalReqBtn>신청</ModalReqBtn>
                </ModalReqBtnWrap>
              </ModalContent>
            </WorkHomeReq>
          </WorkHomeReqBg> : null
      }
      <MemberWrap>
        <MemberAnalysis>
          <Graph />
        </MemberAnalysis>
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
            <EditInfo>내 정보 편집</EditInfo>
            <EditInfo>부서 변경</EditInfo>
          </MemberBtnWrap>
          <OfficeStatusWrap>
            <WorkAtHome onClick={() => { setOnOutModal(true) }}>
              재택 근무 신청
              <p>팀장님, 조금만 쉬다 바로 올게요 ㅠ</p>
            </WorkAtHome>
            <WorkAtOffice onClick={() => { setOnHomeModal(true) }}>
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
