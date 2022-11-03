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
  width: 75%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  background-color: white;
`;

export const graphDiv = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2%;
  margin-right: 2%;
`;

export const graphY = styled.div`
  position: absolute;
  left: 0%;
  top: 1%;
  display: flex;
  flex-direction: column;
  width: 8%;
  height: 94%;
  margin-bottom: 2.7%;
  background-color: white;

  border-right: 0.75rem solid gray;
`;

export const graphX = styled.div`
  position: absolute;
  left: 8.02%;
  top: 94.5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 80%;
  background-color: white;

  border-top: 0.75rem solid gray;
  z-index: 1;
`;

export const graphTextY = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  font-size: 16px;
  justify-content: center;
  margin-right: 1rem;
  top: ${(props) => props.top}%;
`;

export const graphTextX = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
  justify-content: center;
  font-size: 16px;
  margin-top: 0.55rem;
  margin-left: 12.3%;
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
