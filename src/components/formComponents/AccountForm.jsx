import Button from "../utils/Button";
import FormGroup from "./FormGroup";
import useUserContext from "../../hooks/useUserContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputPassword, InputPasswordConfirm } from "./Input";
import {
  updateMyPassword,
  updatePreferences,
} from "../../services/userServices";

function AccountForm() {
  const { updateCurrentUser } = useUserContext();

  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (passwordUpdate) => {
    const { data, err } = await updateMyPassword(passwordUpdate);
    if (err) {
      setError(err);
    }
    if (data) {
      updateCurrentUser(data.user);
    }
  };

  const getPasswordField = watch("password");

  return (
    <form
      className="w-1/2 min-w-[20rem] border-2 border-primary shadow-md shadow-primary/50 px-8 py-10 my-10 rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>{error && <p className="text-red-500">{error}</p>}</FormGroup>
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
    </form>
  );
}

export default AccountForm;
