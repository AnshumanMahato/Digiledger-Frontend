import { useForm } from "react-hook-form";
import FormGroup from "./components/FormGroup";
import Button from "../utils/Button";
import { loginRequest } from "../../services/authServices";
import { useEffect } from "react";
import useUserContext from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import InputEmail from "./components/inputs/InputEmail";
import InputPassword from "./components/inputs/InputPassword";
import FormPannel from "./components/FormPannel";
import useUtilityContext from "../../hooks/useUtilityContext";

function SigninForm() {
  const navigate = useNavigate();
  const { currentUser, updateCurrentUser } = useUserContext();
  const { setErrorStatus, setSuccessStatus } = useUtilityContext();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard", {
        replace: true,
      });
    }
  }, [currentUser, navigate]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (creds) => {
    const { data, err } = await loginRequest(creds);
    if (err) {
      setErrorStatus(err);
    } else {
      setTimeout(() => updateCurrentUser(data.user), 1500);
      setSuccessStatus("Logged In!!!");
    }
  };

  return (
    <FormPannel
      onSubmit={handleSubmit(onSubmit)}
      className="w-11/12 sm:w-3/5 xl:w-1/2"
    >
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
