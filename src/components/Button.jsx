function Button({ children }) {
  return (
    <button className=" px-5 font-bold text-2xl py-3 rounded-xl glass bg-secondary">
      {children}
    </button>
  );
}

export default Button;
