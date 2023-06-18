import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import FormGroup from "./FormGroup";
import { InputDateRange } from "./Input";
import Button from "../utils/Button";

function DateRangeForm({ onSubmit: submit, onClose: close }) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    submit(data.startDate, data.endDate);
    close();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" relative border-2 border-white shadow-white/50 shadow-md px-5 py-8 sm:px-8 sm:py-10 my-10 rounded-2xl bg-accent text-white font-poppins"
    >
      <span
        onClick={close}
        className="text-white text-xl font-bold absolute right-[5%] top-[5%] p-1 hover:text-red-400 cursor-pointer"
      >
        <AiOutlineClose />
      </span>
      <FormGroup className="sm:flex sm:justify-between">
        <InputDateRange control={control} watch={watch} errors={errors} />
      </FormGroup>
      <FormGroup className="flex justify-center items-center">
        <Button success> Submit</Button>
      </FormGroup>
    </form>
  );
}

export default DateRangeForm;
