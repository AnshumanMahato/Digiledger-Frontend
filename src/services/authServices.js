import apiRequest from "./apiRequest";
const url = "https://localhost:3000/api/v1";

const loginRequest = async ({ email, password }) => {
  const { data } = await apiRequest.post(`${url}/user/login`, {
    email,
    password,
  });
  return data;
};

const initLogin = async () => {
  const { data } = await apiRequest.get(`${url}/user/loginStatus`);

  return data;
};

const signupRequest = async ({ name, email, password, passwordConfirm }) => {
  const { data } = await apiRequest.post(`${url}/user/signup`, {
    name,
    email,
    password,
    passwordConfirm,
  });
  return data;
};

export { initLogin, loginRequest, signupRequest };
