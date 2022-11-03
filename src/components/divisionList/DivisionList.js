import * as S from './DivisionListStyle';
export default function DivisionList() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>With Office</S.Title>
      </S.Header>
      <S.ContentWrap>
        <S.DivListWrap>
          <S.DivList>
            <S.Division style={{ backgroundColor: "#E9E9E9", alignItems: "center", justifyContent: "center" }}>
              <S.AddDiv>+ 개발 부서 추가</S.AddDiv>
            </S.Division>
          </S.DivList>
          {
            <S.DivList>
              <S.Division>
                <S.DivTitle>개발 부서 1팀</S.DivTitle>
                <div>
                  <S.DivInform>
                    <S.DivInformTag>담당자</S.DivInformTag>
                    <S.DivInformValue>홍길동</S.DivInformValue>
                  </S.DivInform>
                  <S.DivInform>
                    <S.DivInformTag>메일</S.DivInformTag>
                    <S.DivInformValue>cwstbp0426@gmail.com</S.DivInformValue>
                  </S.DivInform>
                </div>
              </S.Division>
            </S.DivList>
          }
        </S.DivListWrap>
        <S.PeopleList>
          {
            <S.PeopleWrap>
              <S.PeopleName>최우승</S.PeopleName>
              <S.PeopleInformWrap>
                <S.PeopleInform>010123412</S.PeopleInform>
                <S.PeopleInform>example@gmail.com</S.PeopleInform>
              </S.PeopleInformWrap>
            </S.PeopleWrap>
          }
        </S.PeopleList>
      </S.ContentWrap>
    </S.Container>
  )
}
