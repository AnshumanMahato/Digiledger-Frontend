import useTransactionQuery from "../../../../hooks/useTransactionQuery";
import Input from "./Input";

function InputCategory({ register, errors, ...rest }) {
  const { categories } = useTransactionQuery();
  return (
    <>
      <Input
        label="Category"
        type="text"
        id="category"
        errors={errors}
        {...register("category", {
          maxLength: {
            value: 10,
            message: "This field must have no more than 10 characters",
          },
          minLength: {
            value: 3,
            message: "This field must have at least 3 characters",
          },
        })}
        list="categories"
        {...rest}
      />
      <datalist id="categories">
        {categories.current.map((category) => (
          <option key={category} value={category} />
        ))}
      </datalist>
    </>
  );
}

export default InputCategory;
