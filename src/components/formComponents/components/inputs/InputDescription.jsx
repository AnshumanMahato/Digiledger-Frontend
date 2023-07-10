import Input from "./Input";

function InputDescription({ register, errors, ...rest }) {
  return (
    <Input
      label="Note"
      type="textarea"
      id="description"
      cols="50"
      rows="3"
      errors={errors}
      {...register("description", {
        maxLength: {
          value: 100,
          message: "This field must have no more than 100 characters",
        },
      })}
      {...rest}
    />
  );
}

export default InputDescription;
