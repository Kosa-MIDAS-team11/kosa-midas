import styled from "styled-components";

export const MemberWrap = styled.div`
  display: flex;
  height:calc(100vh - 60px);
`;

export const MemberAnalysis = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display:flex;
  align-items: center;
  justify-content: center;
`;

export const MemberInfoContainer = styled.div`
  width: 500px;
  height: 100%;
  background-color: #000;
`;

export const MemberNameWrap = styled.div`
  width: 100%;
  height: 50px;
`;

export const MemberName = styled.div`
  margin-top: 20px;
  width: 30%;
  height: 30px;
  padding-top: 10px;
  margin-left: 30px;
  font-size: 30px;
  font-weight: 700;
  color: white;
`;

export const MemberInnerWrap = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 90px;
`;

export const MemberTeamWrap = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
`;

export const MemberTeam = styled.div`
  width: 70px;
  margin-left: 30px;
  background-color: #6e9024;
  border-radius: 8px;
  color: white;
  font-size: 20px;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  padding: 8px 0px;
`;

export const TeamName = styled.div`
  width: 200px;
  height: 30px;
  margin-left: 10px;
  padding-top: 10px;
  color: #fff;
  font-size: 20px;
`;

export const MemberMailWrap = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  margin-top: 4px;
`;

export const MemberMail = styled.div`
  width: 70px;
  margin-left: 30px;
  background-color: #6e9024;
  border-radius: 8px;
  color: white;
  font-size: 20px;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  padding: 8px 0px;
`;

export const MailAddress = styled.div`
  width: 200px;
  height: 30px;
  margin-left: 10px;
  padding-top: 10px;
  font-size: 20px;
  color: #fff;
`;

export const MemberBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 40px);
  height: 55px;
  padding: 0px 20px;
  margin-top: 24px;
`;

export const EditInfo = styled.div`
  width: 100px;
  height: 30px;
  padding: 4px 8px;
  background-color: #454545;
  font-size: 15px;
  color: #fff;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  cursor: pointer;

`;

export const OfficeStatusWrap = styled.div`
  margin-top: 330px;
  width: 100%;
  height: 200px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WorkAtHome = styled.div`
  margin-top: 20px;
  padding:20px 12px;
  width: 80%;
  background-color: #192f7e;
  border-radius: 12px;
  color: white;
  font-size: 26px;
  text-align: center;
  cursor: pointer;
  p {
    padding-top: 8px;
    color: white;
    font-size: 15px;
  }
`;

export const WorkAtOffice = styled.div`
  margin-top: 20px;
  padding:20px 12px;
  width: 80%;
  background-color: #192f7e;
  border-radius: 12px;
  color: white;
  font-size: 26px;
  text-align: center;
  cursor: pointer;
  p {
    padding-top: 8px;
    color: white;
    font-size: 15px;
  }
`;
export const WorkHomeReqBg = styled.div`
  position: fixed;
  width:100vw;
  height:100vh;
  display:flex;
  top:0px;
  background-color: rgba(0,0,0,0.4);
  z-index: 100;
  align-items: center;
  justify-content: center;
`
export const WorkHomeReq = styled.div`
  width:380px;
  background-color: #353535;
  z-index: 11;
  padding: 20px;
`
export const WorkHomeReqTitle = styled.h1`
  color:white;
  font-size: 28px;
`
export const ModalHeader = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`
export const ModalContent = styled.div`
  display:flex;
  flex-direction: column;
  margin-top: 16px;
`
export const ModalDateInput = styled.input`
  color:black;
  padding: 6px;
  margin-left: 16px;
`
export const DateSetting = styled.div`
  display:flex;
  align-items: center;
  margin-top: 16px;
  h1{
    font-size: 18px;
  }
`
export const ModalReqBtn = styled.button`
  margin-top: 36px;
  padding: 8px 20px;
  font-size: 16px;
  color:white;
  background-color: #3856F5;
  outline: none;
  border:none;
  cursor: pointer;
`
export const ModalReqBtnWrap = styled.div`
  width:100%;
  display:flex;
  align-items: center;
  justify-content: flex-end;
`