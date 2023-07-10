import Input from "./Input";

function InputDate({ fieldname, control, errors, ...rest }) {
  return (
    <Input
      label="Date"
      type="date"
      name={fieldname || "timestamp"}
      control={control}
      errors={errors}
      rules={{
        required: "This field is required",
      }}
      {...rest}
    />
  );
}

export default InputDate;
