import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  min-height:100%;
  display:flex;
  justify-content: space-between;
`
export const BackgroundImg = styled.img`
  width:auto;
  height:100vh;
  filter: blur(4px);
  position: fixed;
  z-index: -1;
`
export const BackgroundLinear = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.34) 0%, rgba(0, 0, 0, 0) 103.52%);
  width:100%;
  height: 50vh;
  position: fixed;
  top: 0px;
`
export const BackWrap = styled.div`
  width:calc(100vw - 350px);
  display:flex;
  justify-content: center;
`
export const SideBar = styled.div`
  width:350px;
  height:100%;
  background-color: black;
  position: fixed;
  right:0px;
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`
export const DescriptWrap = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
`
export const Descript = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 60px;
`
export const LoginWrap = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
  margin-bottom: 20px;
`
export const LoginBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color:white;
  width:80%;
  padding:20px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  border-radius: 12px;
`
export const Title = styled.strong`
  font-size: 64px;
`
export const SubTitle = styled.h1`
  font-size: 24px;
  margin-top: 16px;
  font-weight: 600;
`
export const ExplaneWrap = styled.div`
  position: fixed;
  left:48px;
  top:48px;
`
export const LoginInput = styled.input`
  background-color:#D9D9D9;
  color:black;
  outline: none;
  border: none;
  font-size: 16px;
  width:81%;
  padding:16px 20px;
  margin-top: 24px;
  border-radius:6px;
`