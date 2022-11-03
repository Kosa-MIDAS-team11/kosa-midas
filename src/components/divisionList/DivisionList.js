import Header from "../commmon/Header";
import * as S from "./DivisionListStyle";
import { useAddDivision } from "../../hooks/divisionList/useAddDivision";
import { useEffect, useState } from "react";
import { ReactComponent as SvgCross } from "../../assests/icon/cross.svg";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DivisionList() {
  const [addDivModal, setAddDivModal] = useState(false);
  const [addDivName, setAddDivName] = useState("");
  const [addDivLoc, setAddDivLoc] = useState("");
  const BASE_URL = "https://5142-211-36-133-146.jp.ngrok.io";
  // const [divPeople, setDivPeople] = useState(null);
  const [divList, setDivList] = useState(null);
  const [selectDivId, setSelectDivId] = useState(null);
  const divPeople = [
    {
      name: "홍길동",
      pNum: "01012345678",
      mail: "cwstbp0426@gmail.com",
    },
  ];
  // useEffect(() => {
  //   if (selectDivId) {
  //     axios.get(`${BASE_URL}/department/${selectDivId}`, {
  //       headers: {
  //         Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
  //       }
  //     }).then((res) => {
  //       console.log(res);

  //     }).catch((err) => {
  //       console.log(err);
  //     })
  //   }
  // }, [selectDivId])
  useEffect(() => {
    axios
      .get(`${BASE_URL}/department/list`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        console.log(res);
        setDivList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <S.Container>
      <Header />
      {addDivModal ? (
        <S.WorkHomeReqBg>
          <S.WorkHomeReq>
            <S.ModalHeader>
              <S.WorkHomeReqTitle>부서 추가</S.WorkHomeReqTitle>
              <SvgCross
                onClick={() => {
                  setAddDivModal(false);
                }}
                style={{ cursor: "pointer" }}
                width="36"
                height="36"
                fill="white"
              />
            </S.ModalHeader>
            <S.ModalContent>
              <S.DateSetting>
                <h1>이름</h1>
                <S.ModalDateInput
                  onChange={(e) => {
                    setAddDivName(e.target.value);
                  }}
                  type={"text"}
                />
              </S.DateSetting>
              <S.DateSetting>
                <h1>위치</h1>
                <S.ModalDateInput
                  onChange={(e) => {
                    setAddDivLoc(e.target.value);
                  }}
                  type={"text"}
                />
              </S.DateSetting>
              <S.ModalReqBtnWrap>
                <S.ModalReqBtn
                  onClick={() => {
                    useAddDivision(addDivName, addDivLoc);
                  }}
                >
                  추가
                </S.ModalReqBtn>
              </S.ModalReqBtnWrap>
            </S.ModalContent>
          </S.WorkHomeReq>
        </S.WorkHomeReqBg>
      ) : null}
      <S.ContentWrap>
        <S.DivListWrap>
          <S.DivList>
            <S.Division
              onClick={() => {
                setAddDivModal(true);
              }}
              style={{
                backgroundColor: "#E9E9E9",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <S.AddDiv>+ 부서 추가</S.AddDiv>
            </S.Division>
          </S.DivList>
          {divList?.map((data, key) => (
            <S.DivList key={key}>
              <S.Division
                onClick={() => {
                  setSelectDivId(data.department_id);
                }}
              >
                <S.DivTitle>{data.department_name}</S.DivTitle>
                <div>
                  <S.DivInform>
                    <S.DivInformTag>위치</S.DivInformTag>
                    <S.DivInformValue>{data.location}</S.DivInformValue>
                  </S.DivInform>
                </div>
              </S.Division>
            </S.DivList>
          ))}
        </S.DivListWrap>
        <S.PeopleList>
          <S.DivPeopleTitle>개발 부서 1팀</S.DivPeopleTitle>
          <S.EditDivWrap>
            <h2 style={{ backgroundColor: "#5A5A5A" }}>부서 편집</h2>
            <h2 style={{ backgroundColor: "#C92727" }}>부서 삭제</h2>
          </S.EditDivWrap>
          {divPeople?.map((data, key) => (
            <Link to="/mypage/1">
              <S.PeopleWrap key={key}>
                <S.PeopleName>{data.name}</S.PeopleName>
                <S.PeopleInformWrap>
                  <S.PeopleInform>{data.pNum}</S.PeopleInform>
                  <S.PeopleInform>{data.mail}</S.PeopleInform>
                </S.PeopleInformWrap>
              </S.PeopleWrap>
            </Link>
          ))}
        </S.PeopleList>
      </S.ContentWrap>
    </S.Container>
  );
}
