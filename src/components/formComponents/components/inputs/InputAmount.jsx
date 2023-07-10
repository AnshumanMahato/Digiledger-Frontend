import Input from "./Input";

function InputAmount({ register, errors, ...rest }) {
  return (
    <Input
      label="Amount"
      type="number"
      id="amount"
      errors={errors}
      {...register("amount", {
        required: "This field is required",
        min: { value: 1, message: "Minimum amount is 1" },
      })}
      step="0.01"
      {...rest}
    />
  );
}

export default InputAmount;
