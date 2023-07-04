import Button from "../utils/Button";
import FormGroup from "./FormGroup";
import useUserContext from "../../hooks/useUserContext";
import { useForm } from "react-hook-form";
import { InputCurrency, InputValueSystem } from "./Input";
import { updatePreferences } from "../../services/userServices";
import FormPannel from "./components/FormPannel";
import useUIContext from "../../hooks/useUIContext";

function ConfigurationForm() {
  const { currentUser, updateCurrentUser } = useUserContext();
  const { setSuccessStatus, setErrorStatus } = useUIContext();
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
      setErrorStatus(err);
    } else {
      updateCurrentUser(data.updatedUser);
      setSuccessStatus("Preferences Updated Successfully");
    }
  };

  return (
    <FormPannel
      onSubmit={handleSubmit(onSubmit)}
      className="w-11/12 sm:w-3/5 xl:w-1/2"
    >
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
