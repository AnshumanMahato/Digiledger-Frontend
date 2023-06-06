function Input({ label, id, type, ...rest }) {
  return (
    <>
      <label htmlFor={id} className="block text-xl font-bold mb-3">
        {label}
      </label>
      <input type={type} name={id} id={id} className="form__input" />
    </>
  );
}

export default Input;
