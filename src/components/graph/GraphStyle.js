import styled from "styled-components";

export const container = styled.div`
  display: flex;
  width: 100%;
  min-width: 1440px;
  height: 100vh;
  align-items: center;
`;

export const header = styled.div`
  position: fixed;
  top: 0%;
  display: flex;
  font-weight: 600;
  font-size: 40px;
  background-color: #bbdeff;
  height: 4rem;
  width: 100%;
  padding-left: 3rem;
  z-index: 2;
`;

export const graphDiv1 = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  justify-content: center;
  align-items: flex-end;
  background-color: white;
  div{
    color: #000;
    font-size: 16px;
  }
`;

export const graphDiv = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2%;
  margin-right: 2%;
  margin-left: -10%;
`;

export const graphY = styled.div`
  position: absolute;
  left: -0.1%;
  top: 1%;
  display: flex;
  flex-direction: column;
  width: 8%;
  height: 94%;
  margin-bottom: 2.7%;
  background-color: white;

  border-right: 0.95vw solid gray;
`;

export const graphX = styled.div`
  position: absolute;
  left: 8%;
  top: 94.5%;
  display: flex;
  flex-direction: row;
  width: 90%;
  background-color: white;
  align-content: left;
  justify-content: space-around;
  padding-left: 5%;
  padding-right: 5%;

  border-top: 0.95vw solid gray;
  z-index: 1;
`;

export const graphTextY = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  font-size: 1vw;
  justify-content: center;
  margin-left: -1vw;
  top: ${(props) => props.top}%;
`;

export const graphTextX = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
  justify-content: center;
  font-size: 1vw;
  margin-top: 1.5vw;
`;

export const graphBar = styled.div`
  position: absolute;
  left: ${(props) => props.left + 3.3}%;
  bottom: 3%;

  height: ${(props) => props.height}%;
  width: 7%;
  background-color: ${(props) => (props.color ? props.color : "yellowgreen")};
  z-index: 0;
`;
