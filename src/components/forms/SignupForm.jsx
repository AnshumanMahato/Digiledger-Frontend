import { useForm } from "react-hook-form";
import FormGroup from "./components/FormGroup";
import Button from "../utils/Button";
import { useEffect } from "react";
import { signupRequest } from "../../services/authServices";
import useUserContext from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import InputEmail from "./components/inputs/InputEmail";
import InputName from "./components/inputs/InputName";
import InputPassword from "./components/inputs/InputPassword";
import InputPasswordConfirm from "./components/inputs/InputPasswordConfirm";
import FormPannel from "./components/FormPannel";
import useUtilityContext from "../../hooks/useUtilityContext";

function SignupForm() {
  const navigate = useNavigate();
  const { currentUser, updateCurrentUser } = useUserContext();
  const {
    isProcessing,
    startProcessing,
    stopProcessing,
    setErrorStatus,
    setSuccessStatus,
  } = useUtilityContext();

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
    startProcessing();
    const { data, err } = await signupRequest(info);
    if (err) {
      setErrorStatus(err);
      stopProcessing();
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
        {isProcessing && (
          <div className="p-2 xs:px-4 md:px-5 xs:py-2 md:py-3 text-sm xs:text-base md:text-lg lg:text-xl border-2 border-white rounded-lg">
            Signing Up ...
          </div>
        )}
        {!isProcessing && <Button success>Sign Up</Button>}
      </div>
    </FormPannel>
  );
}

export default SignupForm;
