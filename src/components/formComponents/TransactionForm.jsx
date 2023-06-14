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
import { addTransaction } from "../../services/transactionServices";
import { useState } from "react";
import useTransactionQuery from "../../hooks/useTransactionQuery";

function TransactionForm({ type, onClose: close }) {
  const [error, setError] = useState(null);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { updateCategories, updateParties, resetFilters } =
    useTransactionQuery();

  const onSubmit = async (formData) => {
    const transaction = { ...formData, type };
    const { data, err } = await addTransaction(transaction);
    if (err) {
      setError(err);
    }
    if (data) {
      if (data.updates) {
        updateCategories(data.updates.categories);
        updateParties(data.updates.parties);
      }
      resetFilters();
      close();
    }
  };
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
      <FormGroup className="col-span-full">
        {error && <p className="text-red-500">{error}</p>}
      </FormGroup>
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
      <div className="flex justify-evenly items-center col-span-full">
        {type === "income" && <Button success>Add Income</Button>}
        {type === "expense" && <Button success>Add Expense</Button>}
      </div>
    </form>
  );
}

export default TransactionForm;
