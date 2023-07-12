import Button from "../utils/Button";
import FormGroup from "./components/FormGroup";
import useUserContext from "../../hooks/useUserContext";
import { useForm } from "react-hook-form";
import InputCurrency from "./components/inputs/InputCurrency";
import InputValueSystem from "./components/inputs/InputValueSystem";
import { updatePreferences } from "../../services/userServices";
import FormPannel from "./components/FormPannel";
import useUtilityContext from "../../hooks/useUtilityContext";

function ConfigurationForm() {
  const { currentUser, updateCurrentUser } = useUserContext();
  const { startProcessing, stopProcessing, setSuccessStatus, setErrorStatus } =
    useUtilityContext();
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
    startProcessing();
    const { data, err } = await updatePreferences(preferences);
    if (err) {
      setErrorStatus(err);
    } else {
      updateCurrentUser(data.updatedUser);
      setSuccessStatus("Preferences Updated Successfully");
    }
    stopProcessing();
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
