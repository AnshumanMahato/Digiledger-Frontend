import axios from "axios";
const url = "http://127.0.0.1:3000/api/v1";

export const loginRequest = async ({ email, password }) => {
  try {
    const { data, status } = await axios.post(`${url}/user/login`, {
      email,
      password,
    });
    if (status === 401)
      return {
        err: data.message,
      };
    return data;
  } catch (e) {
    console.log(e);
  }
};
