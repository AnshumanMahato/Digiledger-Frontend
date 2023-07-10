import SignupForm from "../components/forms/SignupForm";
import Button from "../components/utils/Button";
import Section from "../components/utils/Section";

function Signup() {
  return (
    <main className="w-full py-10">
      <Section className="flex flex-col justify-between items-center ">
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
      </Section>
    </main>
  );
}

export default Signup;
