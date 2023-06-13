import FormGroup from "./FormGroup";
import Button from "../utils/Button";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import {
  InputAmount,
  InputCategory,
  InputDate,
  InputDescription,
  InputParty,
} from "./Input";
import { useState } from "react";

function TransactionViewForm({ transaction, onClose: close }) {
  const [editMode, setEditMode] = useState(true);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: transaction,
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" overflow-hidden relative border-2 border-white shadow-white/50 shadow-md px-5 py-8 sm:px-8 sm:py-10 my-10 rounded-2xl bg-accent text-white font-poppins grid grid-cols-2 gap-x-4 sm:gap-x-6"
    >
      <span
        onClick={close}
        className="text-white text-xl font-bold absolute right-[5%] top-[5%] p-1 hover:text-red-400 cursor-pointer"
      >
        <AiOutlineClose />
      </span>
      <FormGroup className="col-span-full"></FormGroup>
      <FormGroup>
        <InputAmount register={register} errors={errors} disabled={!editMode} />
      </FormGroup>
      <FormGroup>
        <InputDate control={control} errors={errors} disabled={!editMode} />
      </FormGroup>
      <FormGroup>
        <InputCategory
          register={register}
          errors={errors}
          disabled={!editMode}
        />
      </FormGroup>
      <FormGroup>
        <InputParty register={register} errors={errors} disabled={!editMode} />
      </FormGroup>
      <FormGroup className="col-span-full">
        <InputDescription
          register={register}
          errors={errors}
          disabled={!editMode}
        />
      </FormGroup>
      <div className="col-span-full grid grid-cols-8 gap-6">
        {!editMode && (
          <>
            <Button success className="col-start-2 col-span-3">
              Edit
            </Button>
            <Button danger className="col-start-5 col-span-3">
              Delete
            </Button>
          </>
        )}
        {editMode && (
          <>
            <Button success className="col-start-2 col-span-3">
              Save
            </Button>
            <Button danger className="col-start-5 col-span-3">
              Cancel
            </Button>
          </>
        )}
      </div>
      <div className="absolute h-full w-full p-12 flex justify-center items-center bg-accent/30">
        <div className="bg-accent p-5 border-2 rounded-lg text-center  text-sm">
          <p>Are you sure you want to delete this transaction?</p>
          <div className="container flex justify-evenly mt-5">
            <Button small success className="">
              Confirm
            </Button>
            <Button small danger className="">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default TransactionViewForm;
