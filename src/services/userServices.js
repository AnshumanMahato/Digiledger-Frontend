import apiRequest from "./apiRequest";

const updateMe = async ({ name, email }) => {
  const updates = { name, email };
  console.log(updates);
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

const updateMyPassword = async ({ password, passwordConfirm }) => {};

const deleteMe = async () => {};

export { updateMe, updatePreferences, updateMyPassword, deleteMe };
