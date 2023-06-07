import axios from "axios";
const url = "http://127.0.0.1:3000/api/v1";

export const loginRequest = async ({ email, password }) => {
  const { data } = await axios.post(`${url}/user/login`, {
    email,
    password,
  });
  return data;
};
