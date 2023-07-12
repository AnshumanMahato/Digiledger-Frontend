import FormGroup from "./components/FormGroup";
import Button from "../utils/Button";
import { useForm } from "react-hook-form";
import InputAmount from "./components/inputs/InputAmount";
import InputCategory from "./components/inputs/InputCategory";
import InputDate from "./components/inputs/InputDate";
import InputDescription from "./components/inputs/InputDescription";
import InputParty from "./components/inputs/InputParty";
import { addTransaction } from "../../services/transactionServices";
import useTransactionQuery from "../../hooks/useTransactionQuery";
import FormPannel from "./components/FormPannel";
import CloseButton from "./components/CloseButton";
import useUtilityContext from "../../hooks/useUtilityContext";
import Loading from "../utils/Loading";

function TransactionForm({ type, onClose: close }) {
  const {
    isProcessing,
    startProcessing,
    stopProcessing,
    setSuccessStatus,
    setErrorStatus,
  } = useUtilityContext();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { updateCategories, updateParties, resetFilters } =
    useTransactionQuery();

  const onSubmit = async (transactionData) => {
    startProcessing();
    const transaction = { ...transactionData, type };
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
    stopProcessing();
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

      {/*
        Display loading screen upon processing initiation
       */}
      {isProcessing && (
        <div className="absolute h-full w-full p-12 flex justify-center items-center bg-accent/30">
          <Loading />
        </div>
      )}
    </FormPannel>
  );
}

export default TransactionForm;
