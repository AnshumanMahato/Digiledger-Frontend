function InputAmount(register, errors) {
  return (
    <>
      <label htmlFor="amount" className="block text-base font-bold mb-3">
        Amount
      </label>
      <input
        type="number"
        name="amount"
        id="amount"
        className="form__input placeholder:text-slate-500"
        {...register("amount", { required: true, min: 1 })}
      />
      {errors.amount && errors.amount.type === "required" && (
        <p>This field is required</p>
      )}
      {errors.amount && errors.amount.type === "min" && (
        <p>Minimum amount is 1</p>
      )}
    </>
  );
}

export default InputAmount;
