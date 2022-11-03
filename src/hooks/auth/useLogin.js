import axios from 'axios';

axios.defaults.withCredentials = true;

// export function userSignInReq(userName, email, pwd, phone_num) {
//   if (pwd !== "" && userName !== "" && phone_num !== 0 && email !== "") {
//     axios({
//       method: "POST",
//       url: 'https://f0a2-211-36-133-121.jp.ngrok.io/user',
//       data: {
//         "name": userName,
//         "email": email,
//         "password": pwd,
//         "phone_num": phone_num,
//       }
//     }).then((res) => {
//       console.log(res);
//     }).catch(error => {
//       console.log(error);
//       throw new Error(error);
//     });
//   }
// }

export function userLogInReq(email, pwd) {
  if (pwd !== "" && email !== "") {
    axios({
      method: "POST",
      url: 'https://f0a2-211-36-133-121.jp.ngrok.io/user/auth',
      data: {
        "email": email,
        "password": pwd
      }
    }).then((res) => {
      console.log(res);
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
      url: 'https://f0a2-211-36-133-121.jp.ngrok.io/user',
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

export function adminSecondAuthReq(code) {
  if (code !== "") {
    axios({
      method: "POST",
      url: 'https://f0a2-211-36-133-121.jp.ngrok.io/admin/second-auth',
      data: {
        "code": code,
      }
    }).then((res) => {
      console.log(res);
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    });
  } else {
    alert("인증 코드를 작성해야합니다.");
  }
}