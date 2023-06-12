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

function TransactionViewForm({ transaction, onClose: close }) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative border-2 border-white shadow-white/50 shadow-md px-5 py-8 sm:px-8 sm:py-10 my-10 rounded-2xl bg-accent text-white font-poppins grid grid-cols-2 gap-x-4 sm:gap-x-6"
    >
      <span
        onClick={close}
        className="text-white text-xl font-bold absolute right-[5%] top-[5%] p-1 hover:text-red-400 cursor-pointer"
      >
        <AiOutlineClose />
      </span>
      <FormGroup className="col-span-full"></FormGroup>
      {console.log(errors)}
      <FormGroup>
        <InputAmount register={register} errors={errors} />
      </FormGroup>
      <FormGroup>
        <InputDate control={control} errors={errors} />
      </FormGroup>
      <FormGroup>
        <InputCategory register={register} errors={errors} />
      </FormGroup>
      <FormGroup>
        <InputParty register={register} errors={errors} />
      </FormGroup>
      <FormGroup className="col-span-full">
        <InputDescription register={register} errors={errors} />
      </FormGroup>
      <div className="col-span-full grid grid-cols-8 gap-6">
        <Button success className="col-start-2 col-span-3">
          Edit
        </Button>
        <Button danger className="col-start-5 col-span-3">
          Delete
        </Button>
      </div>
    </form>
  );
}

export default TransactionViewForm;
