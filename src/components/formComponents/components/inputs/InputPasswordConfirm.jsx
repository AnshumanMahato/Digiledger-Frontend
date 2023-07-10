import Input from "./Input";

function InputPasswordConfirm({ register, errors, getPasswordField }) {
  return (
    <Input
      label="Confirm Password"
      type="password"
      id="passwordConfirm"
      errors={errors}
      {...register("passwordConfirm", {
        required: "This field is required",
        validate: (value) =>
          value === getPasswordField || "This field must match the password",
      })}
    />
  );
}

export default InputPasswordConfirm;
