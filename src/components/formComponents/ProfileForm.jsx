import Button from "../utils/Button";
import FormGroup from "./FormGroup";
import useUserContext from "../../hooks/useUserContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputEmail, InputName } from "./Input";
import { updatePreferences } from "../../services/userServices";

function ProfileForm() {
  const { currentUser, updateCurrentUser } = useUserContext();

  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
    },
  });

  const onSubmit = async (preferences) => {
    const { data, err } = await updatePreferences(preferences);
    if (err) {
      setError(err);
    }
    if (data) {
      updateCurrentUser(data.updatedUser);
    }
  };

  return (
    <form
      className="w-1/2 min-w-[20rem] border-2 border-primary shadow-md shadow-primary/50 px-8 py-10 my-10 rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>{error && <p className="text-red-500">{error}</p>}</FormGroup>
      <FormGroup>
        <InputName register={register} errors={errors} />
      </FormGroup>
      <FormGroup>
        <InputEmail register={register} errors={errors} />
      </FormGroup>

      <div className="flex justify-center items-center">
        <Button success>Save</Button>
      </div>
    </form>
  );
}

export default ProfileForm;
