import Input from "./Input";

function InputValueSystem({ register, errors, ...rest }) {
  const options = [
    {
      label: "International",
      value: "en",
    },
    {
      label: "Indian",
      value: "en-IN",
    },
  ];
  return (
    <Input
      label="Value System"
      type="select"
      id="valueSystem"
      errors={errors}
      {...register("valueSystem", {
        required: "Thie field is required",
      })}
      options={options}
      {...rest}
    />
  );
}

export default InputValueSystem;
