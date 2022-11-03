import * as G from "./GraphStyle.js";

function Graph() {

  const graphYtext = [2, 4, 6, 8, 10, 12, 14];
  const graphXtext = ["14일", "15일", "16일", "17일", "18일", "19일"];
  const workHour = [9, 4, 6, 8, 2, 5];

  let graphYTextCnt = 0;
  let createGraphTextY = graphYtext.map((numbers) => {
    graphYTextCnt++;
    return (
      <G.graphTextY top={100 - graphYTextCnt * 13.8}>{numbers}</G.graphTextY>
    );
  });

  let createGraphTextX = graphXtext.map((days) => {
    return <G.graphTextX>{days}</G.graphTextX>;
  });

  let GraphBarCnt = 0;

  let createGraphBar = workHour.map((hour) => {
    let workColor = "";
    GraphBarCnt++;

    if (hour < 8) {
      workColor = "orange";
    }

    return (
      <G.graphBar
        height={hour * 6.5}
        left={12.75 * GraphBarCnt}
        color={workColor}
      />
    );
  });

  return (
    <G.container>
      <G.header>With Office</G.header>
      <G.graphDiv1>
        <G.graphDiv>
          <G.graphY>{createGraphTextY}</G.graphY>
          <G.graphX>{createGraphTextX}</G.graphX>
          {createGraphBar}
        </G.graphDiv>
      </G.graphDiv1>
    </G.container>
  );
}

export default Graph;
