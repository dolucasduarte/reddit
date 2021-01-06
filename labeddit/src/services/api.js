import axios from "axios";

const api = axios.create({
  baseURL: "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"
});

const signUp = (body, history) => {
  api
    .post("/signup", body)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      history.push("/");
    })
    .catch(error => {
      alert("erro");
    });
};

const signIn = (body, history) => {
  api
    .post("login", body)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      history.push("/");
    })
    .catch(error => {
      alert("erro");
    });
};

export { signUp, signIn };