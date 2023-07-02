import Button from "../utils/Button";
import FormGroup from "./FormGroup";
import useUserContext from "../../hooks/useUserContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputEmail, InputName } from "./Input";
import { updateMe } from "../../services/userServices";
import FormPannel from "./components/FormPannel";
import AvatarPanel from "./components/AvatarPanel";

function ProfileForm() {
  const { currentUser, updateCurrentUser } = useUserContext();

  const [status, setStatus] = useState({ status: null, message: "" });
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
