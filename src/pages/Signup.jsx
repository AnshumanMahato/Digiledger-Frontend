import SignupForm from "../components/formComponents/SignupForm";
import Button from "../components/utils/Button";

function Signup() {
  return (
    <main className="flex flex-col justify-between items-center w-full py-10">
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
        Create an Account
      </h1>
      <SignupForm />
      <div className="flex flex-col items-center">
        <p className="text-base sm:text-xl lg:text-2xl mb-4">
          Already have an account?{" "}
        </p>
        <Button to="/signin" small>
          Sign In
        </Button>
      </div>
    </main>
  );
}

export default Signup;
