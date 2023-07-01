import SigninForm from "../components/formComponents/SigninForm";
import Button from "../components/utils/Button";

function Signin(params) {
  return (
    <main className="flex flex-col justify-between items-center w-full py-10">
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
        Sign In to your Account
      </h1>
      <SigninForm />
      <div className="flex flex-col items-center">
        <p className="text-base sm:text-xl lg:text-2xl mb-4">
          Don't have an account?{" "}
        </p>
        <Button to="/signup" small>
          Sign Up
        </Button>
      </div>
    </main>
  );
}

export default Signin;
