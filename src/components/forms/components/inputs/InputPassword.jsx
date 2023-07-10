import Input from "./Input";

function InputPassword({ register, errors, current, update }) {
  const label = current
    ? "Current Password"
    : update
    ? "New Password"
    : "Password";

  const name = current ? "passwordCurrent" : "password";
  return (
    <Input
      label={label}
      type="password"
      id={name}
      errors={errors}
      {...register(name, {
        required: "This field is required",
        maxLength: {
          value: 20,
          message: "This field must have no more than 20 characters",
        },
        minLength: {
          value: 8,
          message: "This field must have at least 8 characters",
        },
      })}
    />
  );
}

InputPassword.propTypes = {
  checkVariation: ({ current, update }) => {
    const count = Number(!!current + !!update);
    if (count > 1)
      return new Error("Only one of current or update can be true");
  },
};

export default InputPassword;
