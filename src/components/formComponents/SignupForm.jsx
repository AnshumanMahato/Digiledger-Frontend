import FormGroup from "./FormGroup";
import Input from "./Input";
import Button from "../utils/Button";

function SignupForm() {
  return (
    <form className="w-1/2 min-w-[20rem] border-2 border-primary shadow-md shadow-primary/50 px-8 py-10 my-10 rounded-2xl">
      <FormGroup>
        <Input type="text" label="Name" id="name" />
      </FormGroup>
      <FormGroup>
        <Input type="email" label="Email" id="email" />
      </FormGroup>
      <FormGroup>
        <Input type="password" label="Password" id="password" />
      </FormGroup>
      <FormGroup>
        <Input type="password" label="Confirm Password" id="passwordConfirm" />
      </FormGroup>
      <div className="flex justify-center items-center">
        <Button success>Sign Up</Button>
      </div>
    </form>
  );
}

export default SignupForm;
