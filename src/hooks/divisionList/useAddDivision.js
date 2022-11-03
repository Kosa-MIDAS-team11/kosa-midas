import axios from "axios";

export function useAddDivision(name, location) {
  if (name !== "" && location !== "") {
    axios({
      method: "POST",
      url: `${BASE_URL}/department`,
      data: {
        "name": name,
        "location": location
      }
    }).then((res) => {
      console.log(res);
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    });
  } else {
    alert("필수 입력을 전부 해주세요.");
  }
}