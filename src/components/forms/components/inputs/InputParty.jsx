import useTransactionQuery from "../../../../hooks/useTransactionQuery";
import Input from "./Input";

function InputParty({ register, errors, ...rest }) {
  const { parties } = useTransactionQuery();
  return (
    <>
      <Input
        label="Party"
        type="text"
        id="party"
        errors={errors}
        {...register("party", {
          required: "This field is required",
          maxLength: {
            value: 15,
            message: "This field must have no more than 10 characters",
          },
          minLength: {
            value: 3,
            message: "This field must have at least 3 characters",
          },
        })}
        list="parties"
        {...rest}
      />
      <datalist id="parties">
        {parties.current.map((party) => (
          <option key={party} value={party} />
        ))}
      </datalist>
    </>
  );
}

export default InputParty;
