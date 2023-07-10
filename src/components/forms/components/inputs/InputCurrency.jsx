import Input from "./Input";
import currencies from "../../../../utils/currencyArray.json";

function InputCurrency({ register, errors, ...rest }) {
  const options = currencies.map((currency) => ({
    label: currency.name,
    value: currency.code,
  }));

  return (
    <>
      <Input
        label="Currency"
        type="select"
        id="currency"
        errors={errors}
        {...register("currency", {
          required: "This field is required",
        })}
        options={options}
        {...rest}
      />
    </>
  );
}

export default InputCurrency;
