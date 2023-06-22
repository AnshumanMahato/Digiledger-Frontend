import apiRequest from "./apiRequest";

const updateMe = async ({ name, email, currency, valueSystem }) => {
  const updates = { name, email, currency, valueSystem };
  console.log(updates);
};

const updateMyPassword = async ({ password, passwordConfirm }) => {};

const deleteMe = async () => {};

export { updateMe, updateMyPassword, deleteMe };
