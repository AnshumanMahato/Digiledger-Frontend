import apiRequest from "./apiRequest";

const loginRequest = async ({ email, password }) => {
  try {
    const { data } = await apiRequest.post(`/user/login`, {
      email,
      password,
    });
    return data;
  } catch (err) {
    return {
      err: err.response?.data.message || err.message,
    };
  }
};

const logoutRequest = async () => {
  try {
    const { data } = await apiRequest.get(`/user/logout`);
    return data;
  } catch (err) {
    return {
      err: err.response?.data.message || err.message,
    };
  }
};

const initLogin = async (path) => {
  console.log(path);
  try {
    const { data } = await apiRequest.get(`/user/loginStatus`);
    return data;
  } catch (err) {
    return {
      err: err.response?.data.message || err.message,
    };
  }
};

const signupRequest = async ({ name, email, password, passwordConfirm }) => {
  try {
    const { data } = await apiRequest.post(`/user/signup`, {
      name,
      email,
      password,
      passwordConfirm,
    });
    return data;
  } catch (err) {
    return {
      err: err.response?.data.message || err.message,
    };
  }
};

export { initLogin, loginRequest, signupRequest, logoutRequest };
