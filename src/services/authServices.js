import apiRequest from "./apiRequest";
const url = "https://localhost:3000/api/v1";

export const loginRequest = async ({ email, password }) => {
  const { data } = await apiRequest.post(`${url}/user/login`, {
    email,
    password,
  });
  return data;
};

export const initLogin = async () => {
  const { data } = await apiRequest.get(`${url}/user/loginStatus`);

  return data;
};
