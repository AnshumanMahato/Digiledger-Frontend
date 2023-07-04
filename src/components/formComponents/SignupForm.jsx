import { useForm } from "react-hook-form";
import FormGroup from "./FormGroup";
import Button from "../utils/Button";
import { useEffect } from "react";
import { signupRequest } from "../../services/authServices";
import useUserContext from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import {
  InputEmail,
  InputName,
  InputPassword,
  InputPasswordConfirm,
} from "./Input";
import FormPannel from "./components/FormPannel";
import useUIContext from "../../hooks/useUIContext";

function SignupForm() {
  const navigate = useNavigate();
  const { currentUser, updateCurrentUser } = useUserContext();
  const { setErrorStatus, setSuccessStatus } = useUIContext();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard", {
        replace: true,
      });
    }
  }, [currentUser, navigate]);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (info) => {
    const { data, err } = await signupRequest(info);
    if (err) {
      setErrorStatus(err);
    } else {
      setTimeout(() => updateCurrentUser(data.user), 1500);
      setSuccessStatus("Account Created Successfully!!!");
    }
  };

  const getPasswordField = watch("password");

  return (
    <FormPannel
      onSubmit={handleSubmit(onSubmit)}
      className="w-11/12 sm:w-3/5 xl:w-1/2"
    >
      <FormGroup>
        <InputName register={register} errors={errors} />
      </FormGroup>
      <FormGroup>
        <InputEmail register={register} errors={errors} />
      </FormGroup>
      <FormGroup>
        <InputPassword register={register} errors={errors} />
      </FormGroup>
      <FormGroup>
        <InputPasswordConfirm
          register={register}
          errors={errors}
          getPasswordField={getPasswordField}
        />
      </FormGroup>
      <div className="flex justify-center items-center">
        <Button success>Sign Up</Button>
      </div>
    </FormPannel>
  );
}

export default SignupForm;
