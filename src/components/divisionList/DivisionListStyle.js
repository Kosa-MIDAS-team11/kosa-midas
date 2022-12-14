import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
`
export const DivList = styled.section`
  cursor: pointer;
  width:calc((100% / 3) - 36px);
  height:calc(20vw - 48px);
  padding: 24px;
  padding-top:24px;
  padding-bottom: 0px;
  padding-right: 0px;
`
export const DivListWrap = styled.div`
  width:100%;
  display:flex;
  align-content: flex-start;
  flex-wrap: wrap;
`
export const ContentWrap = styled.div`
  display:flex;
`
export const PeopleList = styled.div`
  display:flex;
  flex-direction: column;
  background-color: black;
  width:500px;
  height:calc(100vh - 60px - 40px);
  padding: 20px 0px;
`
export const Division = styled.div`
  width:calc(100% - 48px);
  height:calc(100% - 48px);
  padding:24px;
  background-color:black;
  border-radius: 12px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`
export const DivTitle = styled.h1`
  color:white;
  font-weight: bold;
  font-size: 32px;
  margin: 8px 0px;
`
export const DivInform = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 12px;
`
export const DivInformTag = styled.span`
  padding:6px 0px;
  border-radius: 6px;
  background-color: #14FF00;
  color:black;
  font-size: 15px;
  margin-right: 12px;
  width:60px;
  text-align: center;
`
export const DivInformValue = styled.h1`
  font-size: 16px;
`
export const AddDiv = styled.h1`
  color:black;
  font-size: 20px;
  font-weight: bold;
`
export const PeopleWrap = styled.div`
  width:calc(100% - 48px - 48px);
  padding: 24px;
  margin: 24px;
  margin-bottom: 8px;
  background-color: #192F7E;
  display:flex;
  justify-content: space-between;
  border-radius: 8px;
  cursor: pointer;
`
export const PeopleName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  width:auto;
`
export const PeopleInform = styled.h2`
  font-size: 15px;
`
export const PeopleInformWrap = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-end;
`
export const DivPeopleTitle = styled.h1`
  font-size: 20px;
  color:white;
  font-weight: 600;
  margin-left: 24px;
  margin-top: 12px;
`
export const EditDivWrap = styled.div`
  display:flex;
  justify-content: space-between;
  width:calc(100% - 48px);
  margin: 24px;
  h2{
    width:35%;
    padding: 8px;
    display:flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
  }
`

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