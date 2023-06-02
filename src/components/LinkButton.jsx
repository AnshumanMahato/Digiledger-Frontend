import { Link } from "react-router-dom";

function LinkButton({ children, to, ...rest }) {
  return (
    <Link
      to={to}
      className=" px-10 font-md text-md py-3 rounded-full transition-shadow shadow-primary shadow-md hover:shadow-lg active:shadow-sm hover:shadow-primary active:shadow-primary border border-primary glass"
      {...rest}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
