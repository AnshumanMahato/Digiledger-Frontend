import Button from "../utils/Button";
import FormGroup from "./FormGroup";
import useUserContext from "../../hooks/useUserContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputCurrency, InputValueSystem } from "./Input";
import { updatePreferences } from "../../services/userServices";
import FormPannel from "./components/FormPannel";

function ConfigurationForm() {
  const { currentUser, updateCurrentUser } = useUserContext();
  const [status, setStatus] = useState({ status: null, message: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currency: currentUser.currency,
      valueSystem: currentUser.valueSystem,
    },
  });

  const onSubmit = async (preferences) => {
    const { data, err } = await updatePreferences(preferences);
    if (err) {
      setStatus({ status: "error", message: err });
    }
    if (data) {
      updateCurrentUser(data.updatedUser);
      setStatus({ status: "success", message: "Updated Successfully" });
      setTimeout(() => {
        setStatus({ status: null, message: "" });
      }, 1500);
    }
  };

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
        <InputCurrency register={register} errors={errors} />
      </FormGroup>
      <FormGroup>
        <InputValueSystem register={register} errors={errors} />
      </FormGroup>

      <div className="flex justify-center items-center">
        <Button success>Save</Button>
      </div>
    </FormPannel>
  );
}

export default ConfigurationForm;
