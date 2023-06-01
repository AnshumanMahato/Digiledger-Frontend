function Button({ children }) {
  return (
    <button className=" px-10 font-md text-md py-3 rounded-full shadow-primary shadow-md hover:shadow-lg active:shadow-lg hover:shadow-primary active:shadow-primary border border-primary">
      {children}
    </button>
  );
}

export default Button;
