import axios from 'axios';

export function signInReq(userName, email, pwd, phone_num) {
  if (pwd !== "" && userName !== "" && phoneNum !== 0 && email !== "") {
    axios({
      method: "POST",
      url: 'https://13.209.26.239:8000/user',
      data: {
        "name": userName,
        "email": email,
        "password": pwd,
        "phone_num": phone_num,
      }
    }).then((res) => {
      console.log(res);
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    });
  }
}

export function logInReq(userName, email, pwd, phone_num) {
  if (pwd !== "" && userName !== "" && phoneNum !== 0 && email !== "") {
    axios({
      method: "POST",
      url: 'https://13.209.26.239:8000/user/auth',
      data: {
        "email": email,
      }
    }).then((res) => {
      console.log(res);
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    });
  }
}