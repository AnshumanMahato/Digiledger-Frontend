import Button from "../utils/Button";
import FormGroup from "./components/FormGroup";
import useUserContext from "../../hooks/useUserContext";
import { useForm } from "react-hook-form";
import InputEmail from "./components/inputs/InputEmail";
import InputName from "./components/inputs/InputName";
import { updateMe } from "../../services/userServices";
import FormPannel from "./components/FormPannel";
import AvatarPanel from "./components/AvatarPanel";
import useUtilityContext from "../../hooks/useUtilityContext";

function ProfileForm() {
  const { currentUser, updateCurrentUser } = useUserContext();
  const { setSuccessStatus, setErrorStatus } = useUtilityContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
      photo: currentUser.photo,
    },
  });

  const onSubmit = async (profile) => {
    const { data, err } = await updateMe(profile);
    if (err) {
      setErrorStatus(err);
    } else {
      updateCurrentUser(data.updatedUser);
      setSuccessStatus("Profile Updated Successfully");
    }
  };

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
        <label className="block mb-3 text-base sm:text-lg font-bold">
          Avatar
        </label>
        <AvatarPanel register={register} value={watch("photo")} />
      </FormGroup>

      <div className="flex justify-center items-center">
        <Button success>Save</Button>
      </div>
    </FormPannel>
  );
}

export default ProfileForm;
