import FormGroup from "./FormGroup";
import Input from "./Input";
import Button from "../utils/Button";

function SigninForm() {
  return (
    <form className="w-1/2 min-w-[20rem] border-2 border-primary shadow-md shadow-primary/50 px-8 py-10 my-10 rounded-2xl">
      <FormGroup>
        <Input type="email" label="Email" id="email" />
      </FormGroup>
      <FormGroup>
        <Input type="password" label="Password" id="password" />
      </FormGroup>
      <div className="flex justify-center items-center">
        <Button success>Sign In</Button>
      </div>
    </form>
  );
}

export default SigninForm;
