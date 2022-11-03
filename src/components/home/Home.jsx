import React from "react";
import Header from "../commmon/Header";
import {
  HomeContainer,
  MemberListContainer,
  MemberList,
  AnalysisContainer,
} from "./Home.style";
import MemberListItem from "../commmon/MemberListItem";
import MyTimeAnalysis from "../analysis/MyTimeAnalysis";

const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <AnalysisContainer>
          <MyTimeAnalysis />
        </AnalysisContainer>
        <MemberListContainer>
          <MemberList>
            <MemberListItem></MemberListItem>
          </MemberList>
        </MemberListContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
