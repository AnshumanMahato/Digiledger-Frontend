import { useForm } from "react-hook-form";
import FormGroup from "./FormGroup";
import Button from "../utils/Button";
import { loginRequest } from "../../services/authServices";
import { useEffect, useState } from "react";
import useUserContext from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import { InputEmail, InputPassword } from "./Input";
import FormPannel from "./components/FormPannel";

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
    <FormPannel
      onSubmit={handleSubmit(onSubmit)}
      className="w-11/12 sm:w-3/5 xl:w-1/2"
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
    </FormPannel>
  );
}

export default SigninForm;
