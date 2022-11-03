import Header from '../commmon/Header';
import * as S from './DivisionListStyle';
export default function DivisionList() {
  const sampleData = [
    {
      id: "uid",
      name: "개발 부서 1팀",
      owner: "홍길동",
      mail: "cwstbp0426@gmail.com"
    }
  ]
  const divPeople = [
    {
      name: "최우승",
      pNum: "01066643971",
      mail: "cwstbp0426@gmail.com"
    }
  ]
  return (
    <S.Container>
      <Header />
      <S.ContentWrap>
        <S.DivListWrap>
          <S.DivList>
            <S.Division style={{ backgroundColor: "#E9E9E9", alignItems: "center", justifyContent: "center" }}>
              <S.AddDiv>+ 부서 추가</S.AddDiv>
            </S.Division>
          </S.DivList>
          {
            sampleData.map((data, key) => (
              <S.DivList key={key}>
                <S.Division>
                  <S.DivTitle>{data.name}</S.DivTitle>
                  <div>
                    <S.DivInform>
                      <S.DivInformTag>담당자</S.DivInformTag>
                      <S.DivInformValue>{data.owner}</S.DivInformValue>
                    </S.DivInform>
                    <S.DivInform>
                      <S.DivInformTag>메일</S.DivInformTag>
                      <S.DivInformValue>{data.mail}</S.DivInformValue>
                    </S.DivInform>
                  </div>
                </S.Division>
              </S.DivList>
            ))
          }
        </S.DivListWrap>
        <S.PeopleList>
          <S.DivPeopleTitle>개발 부서 1팀</S.DivPeopleTitle>
          <S.EditDivWrap>
            <h2 style={{ backgroundColor: "#5A5A5A" }}>부서 편집</h2>
            <h2 style={{ backgroundColor: "#C92727" }}>부서 삭제</h2>
          </S.EditDivWrap>
          {
            divPeople.map((data, key) => (
              <S.PeopleWrap key={key}>
                <S.PeopleName>{data.name}</S.PeopleName>
                <S.PeopleInformWrap>
                  <S.PeopleInform>{data.pNum}</S.PeopleInform>
                  <S.PeopleInform>{data.mail}</S.PeopleInform>
                </S.PeopleInformWrap>
              </S.PeopleWrap>
            ))
          }
        </S.PeopleList>
      </S.ContentWrap>
    </S.Container>
  )
}
