import FormGroup from "./FormGroup";
import Button from "../utils/Button";
import { useForm } from "react-hook-form";
import {
  InputAmount,
  InputCategory,
  InputDate,
  InputDescription,
  InputParty,
} from "./Input";
import { addTransaction } from "../../services/transactionServices";
import useTransactionQuery from "../../hooks/useTransactionQuery";
import FormPannel from "./components/FormPannel";
import CloseButton from "./components/CloseButton";
import useUtilityContext from "../../hooks/useUtilityContext";

function TransactionForm({ type, onClose: close }) {
  const { setSuccessStatus, setErrorStatus } = useUtilityContext();

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
    /*
      Setting category to undefined as this may saved in DB. Emty string is still a string. 
      TODO: Need to set the backend to resolve this
    */
    transaction.category =
      transaction.category !== "" ? transaction.category : undefined;
    const { data, err } = await addTransaction(transaction);
    if (err) {
      setErrorStatus(err);
    } else {
      if (data.updates) {
        updateCategories(data.updates.categories);
        updateParties(data.updates.parties);
      }
      resetFilters();
      setSuccessStatus("Transaction Created");
      close();
    }
  };
  return (
    <FormPannel
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-x-4 sm:gap-x-6"
    >
      <CloseButton onClick={close} />
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
    </FormPannel>
  );
}

export default TransactionForm;
