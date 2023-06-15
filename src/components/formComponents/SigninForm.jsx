import { useForm } from "react-hook-form";
import FormGroup from "./FormGroup";
import Button from "../utils/Button";
import { loginRequest } from "../../services/authServices";
import { useEffect, useState } from "react";
import useUserContext from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import { InputEmail, InputPassword } from "./Input";

function SigninForm() {
  const navigate = useNavigate();
  const { currentUser, updateCurrentUser } = useUserContext();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard", {
        replace: true,
      });
    }
  }, [currentUser, navigate]);

  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const {
        data: { user },
      } = await loginRequest(data);
      updateCurrentUser(user);
      setError(null);
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  return (
    <form
      className="w-1/2 min-w-[20rem] border-2 border-primary shadow-md shadow-primary/50 px-8 py-10 my-10 rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>{error && <p className="text-red-500">{error}</p>}</FormGroup>
      <FormGroup>
        <InputEmail register={register} errors={errors} />
      </FormGroup>
      <FormGroup>
        <InputPassword register={register} errors={errors} />
      </FormGroup>
      <div className="flex justify-center items-center">
        <Button success>Sign In</Button>
      </div>
    </form>
  );
}

export default SigninForm;
