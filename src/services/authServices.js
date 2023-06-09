import apiRequest from "./apiRequest";

const loginRequest = async ({ email, password }) => {
  const { data } = await apiRequest.post(`/user/login`, {
    email,
    password,
  });
  return data;
};

const logoutRequest = async () => {
  const { data } = await apiRequest.get(`/user/logout`);
  return data;
};

const initLogin = async () => {
  const { data } = await apiRequest.get(`/user/loginStatus`);

  return data;
};

const signupRequest = async ({ name, email, password, passwordConfirm }) => {
  const { data } = await apiRequest.post(`/user/signup`, {
    name,
    email,
    password,
    passwordConfirm,
  });
  return data;
};

export { initLogin, loginRequest, signupRequest, logoutRequest };
