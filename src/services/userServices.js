import apiRequest from "./apiRequest";

const updateMe = async ({ name, email }) => {
  try {
    const { data } = await apiRequest.patch("/user/updateMe", {
      name,
      email,
    });
    return data;
  } catch (err) {
    return {
      err: err.response?.data.message || err.message,
    };
  }
};

const updatePreferences = async ({ currency, valueSystem }) => {
  try {
    const { data } = await apiRequest.patch("/user/updateMe", {
      currency,
      valueSystem,
    });
    return data;
  } catch (err) {
    return {
      err: err.response?.data.message || err.message,
    };
  }
};

const updateMyPassword = async ({
  passwordCurrent,
  password,
  passwordConfirm,
}) => {
  try {
    const { data } = await apiRequest.patch("/user/updateMyPassword", {
      passwordCurrent,
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

const deleteMe = async () => {};

export { updateMe, updatePreferences, updateMyPassword, deleteMe };
