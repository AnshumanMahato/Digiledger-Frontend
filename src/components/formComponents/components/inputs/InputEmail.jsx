import Input from "./Input";

function InputEmail({ register, errors, ...rest }) {
  return (
    <Input
      label="Email"
      type="email"
      id="email"
      errors={errors}
      {...register("email", {
        required: "This field is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "This field must be a valid email address",
        },
      })}
      {...rest}
    />
  );
}

export default InputEmail;
