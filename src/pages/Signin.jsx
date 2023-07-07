import SigninForm from "../components/formComponents/SigninForm";
import Button from "../components/utils/Button";
import Section from "../components/utils/Section";

function Signin(params) {
  return (
    <main className="w-full py-10">
      <Section className="flex flex-col justify-between items-center">
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
      </Section>
    </main>
  );
}

export default Signin;
