import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  min-height:100vh;
  display:flex;
  align-items: center;
  justify-content: center;
`
export const LoginWrap = styled.section`
  width:420px;
  height:auto;
  padding: 50px 0px;
  background: #FAFAFA;
  box-shadow: 0px 4px 30px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display:flex;
  flex-direction: column;
  align-items: center;
`
export const LoginText = styled.h1`
  font-size: 24px;
  color:black;
  margin-top: 16px;
  margin-bottom: 24px;
`
export const LoginInput = styled.input`
  background-color:#D9D9D9;
  color:black;
  outline: none;
  border: none;
  padding:14px;
  font-size: 16px;
  width:calc(65% - 24px);
  margin-top: 12px;
`
export const LoginBtn = styled.button`
  background-color:#4382E0;
  text-align: center;
  color:white;
  outline: none;
  border: none;
  padding:14px;
  font-size: 16px;
  width:66%;
  cursor: pointer;
  margin-top: 36px;
`
export const PlaceWrap = styled.section`
  width:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
`
export const NoAuth = styled.h2`
  color:black;
  font-size: 13px;
  margin-top: 36px;
  opacity: 0.5;
  font-weight: bold;
  cursor: pointer;
`