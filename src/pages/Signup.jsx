import { Link } from "react-router-dom";
import SignupForm from "../components/formComponents/SignupForm";

function Signup() {
  return (
    <main className="flex flex-col justify-between items-center w-full py-10">
      <h1 className="font-bold text-3xl text-center">Create an Account</h1>
      <SignupForm />
      <p>
        Already have an account?{" "}
        <Link
          to="/signin"
          className="hover:text-primary active:text-primary transition-colors"
        >
          Sign In
        </Link>
      </p>
    </main>
  );
}

export default Signup;
