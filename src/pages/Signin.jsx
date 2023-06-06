import { Link } from "react-router-dom";
import SigninForm from "../components/formComponents/SigninForm";

function Signin(params) {
  return (
    <main className="flex flex-col justify-between items-center w-full py-10">
      <h1 className="font-bold text-3xl text-center">
        Sign In to your Account
      </h1>
      <SigninForm />
      <p>
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="hover:text-primary active:text-primary transition-colors"
        >
          Sign Up
        </Link>
      </p>
    </main>
  );
}

export default Signin;
