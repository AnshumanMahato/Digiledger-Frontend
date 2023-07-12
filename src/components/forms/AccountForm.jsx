import Button from "../utils/Button";
import FormGroup from "../forms/components/FormGroup";
import useUserContext from "../../hooks/useUserContext";
import { useForm } from "react-hook-form";
import InputPassword from "../forms/components/inputs/InputPassword";
import InputPasswordConfirm from "../forms/components/inputs/InputPasswordConfirm";
import { updateMyPassword } from "../../services/userServices";
import FormPannel from "../forms/components/FormPannel";
import useUtilityContext from "../../hooks/useUtilityContext";

function AccountForm() {
  const { updateCurrentUser } = useUserContext();
  const { startProcessing, stopProcessing, setSuccessStatus, setErrorStatus } =
    useUtilityContext();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (passwordUpdate) => {
    startProcessing();
    const { data, err } = await updateMyPassword(passwordUpdate);
    if (err) {
      setErrorStatus(err);
    } else {
      updateCurrentUser(data.user);
      reset();
      setSuccessStatus("Password Updated Successfully");
    }
    stopProcessing();
  };

  const getPasswordField = watch("password");

  return (
    <FormPannel
      onSubmit={handleSubmit(onSubmit)}
      className="w-11/12 sm:w-3/5 xl:w-1/2"
    >
      <FormGroup>
        <InputPassword register={register} errors={errors} current />
      </FormGroup>
      <FormGroup>
        <InputPassword register={register} errors={errors} update />
      </FormGroup>
      <FormGroup>
        <InputPasswordConfirm
          register={register}
          errors={errors}
          getPasswordField={getPasswordField}
        />
      </FormGroup>

      <div className="flex justify-center items-center">
        <Button success>Save</Button>
      </div>
    </FormPannel>
  );
}

export default AccountForm;
