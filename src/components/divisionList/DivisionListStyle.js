import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  min-height:100%;
`
export const BackgroundImg = styled.img`
  width:auto;
  height:100vh;
  z-index: -1;
  position: fixed;
  filter: blur(2px);
`
export const BackgroundLinear = styled.div`
  background-color: rgba(0,0,0,0.3);
  width:100%;
  height: 100%;
  position: fixed;
  top: 0px;
  z-index: -1;
`
export const DescriptWrap = styled.section`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-end;
  margin-top: 40px;
  margin-left: 8vw;
`
export const Descript = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
`
export const Title = styled.strong`
  font-size: 38px;
  margin-bottom: 32px;
  margin-top: 4px;
`
export const ContentWrap = styled.div`
  width:100%;
  min-height:100vh;
  display:flex;
  flex-direction: column;
  justify-content:space-evenly;
  align-items: center;
`
export const LoginWrap = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  height:40vh;
`
export const LoginText = styled.h1`
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 32px;
  font-weight: 600;
`
export const LoginInput = styled.input`
  color:black;
  padding: 10px 12px;
  width:60vw;
  margin-top: 10px;
  margin-bottom: 6px;
`
export const LoginBtn = styled.button`
  color:white;
  padding: 10px 24px;
  width:calc(60vw + 26px);
  background-color: blue;
  outline: none;
  border: none;
  margin-top: 32px;
  font-weight: 600;
  cursor: pointer;
`