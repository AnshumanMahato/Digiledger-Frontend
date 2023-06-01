import { Link } from "react-router-dom";

function LinkButton({ children, to }) {
  return (
    <Link
      to={to}
      className=" px-10 font-md text-md py-3 rounded-full shadow-primary shadow-md hover:shadow-lg active:shadow-lg hover:shadow-primary active:shadow-primary border border-primary"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
