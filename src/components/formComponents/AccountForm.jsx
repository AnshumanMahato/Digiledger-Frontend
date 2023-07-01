import Button from "../utils/Button";
import FormGroup from "./FormGroup";
import useUserContext from "../../hooks/useUserContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputPassword, InputPasswordConfirm } from "./Input";
import { updateMyPassword } from "../../services/userServices";
import FormPannel from "./components/FormPannel";

function AccountForm() {
  const { updateCurrentUser } = useUserContext();
  const [status, setStatus] = useState({ status: null, message: "" });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (passwordUpdate) => {
    const { data, err } = await updateMyPassword(passwordUpdate);
    if (err) {
      setStatus({ status: "error", message: err });
    }
    if (data) {
      updateCurrentUser(data.user);
      reset();
      setStatus({ status: "success", message: "Updated Successfully" });
      setTimeout(() => {
        setStatus({ status: null, message: "" });
      }, 1500);
    }
  };

  const getPasswordField = watch("password");

  return (
    <FormPannel
      onSubmit={handleSubmit(onSubmit)}
      className="w-11/12 sm:w-3/5 xl:w-1/2"
    >
      <FormGroup className="text-center">
        {status.status === "error" && (
          <p className="text-red-500">{status.message}</p>
        )}
        {status.status === "success" && (
          <p className="text-green-500">{status.message}</p>
        )}
      </FormGroup>
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
