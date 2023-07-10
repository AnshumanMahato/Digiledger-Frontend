import Input from "./Input";

function InputName({ register, errors }) {
  return (
    <Input
      label="Name"
      type="text"
      id="name"
      errors={errors}
      {...register("name", {
        required: '"This field is required"',
        maxLength: {
          value: 30,
          message: "This field must have no more than 30 characters",
        },
        minLength: {
          value: 3,
          message: "This field must have at least 3 characters",
        },
      })}
    />
  );
}

export default InputName;
