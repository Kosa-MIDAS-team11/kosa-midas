import axios from 'axios';
axios.defaults.withCredentials = true;
const BASE_URL = "https://5142-211-36-133-146.jp.ngrok.io"

export function userLogInReq(email, pwd) {
  if (pwd !== "" && email !== "") {
    return axios({
      method: "POST",
      url: `${BASE_URL}/user/auth`,
      data: {
        "email": email,
        "password": pwd
      }
    }).then((res) => {
      if (res.statusText === "OK") {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data));
        return true;
      }
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    });
  }
}
export function userSignInReq(userName, email, pwd, phone_num, dId) {
  if (pwd !== "" && userName !== "" && phone_num !== 0 && email !== "" && dId !== "") {
    axios({
      method: "POST",
      url: `${BASE_URL}/user`,
      data: {
        "department_id": 1,
        "name": userName,
        "email": email,
        "password": pwd,
        "phone_num": String(phone_num),
        "dId": dId
      }
    }).then((res) => {
      console.log(res);
      alert("회원가입 되었습니다.");
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    });
  }
}

export function adminSignInReq(userName, email, pwd, phone_num) {
  if (pwd !== "" && userName !== "" && phone_num !== 0 && email !== "") {
    axios({
      method: "POST",
      url: `${BASE_URL}/admin`,
      data: {
        "name": userName,
        "email": email,
        "password": pwd,
        "phone_num": String(phone_num),
      }
    }).then((res) => {
      console.log(res);
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    });
  }
}

export function adminSecondAuthReq(code) {
  if (code !== "") {
    return axios({
      method: "POST",
      url: `${BASE_URL}/admin/second-auth`,
      data: {
        "auth_code": code
      }
    }).then((res) => {
      if (res.status === 200) {
        return true;
      }
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    });
  } else {
    alert("인증 코드를 작성해야합니다.");
  }
}