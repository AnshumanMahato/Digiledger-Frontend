import FormGroup from "./components/FormGroup";
import Button from "../utils/Button";
import { useForm } from "react-hook-form";
import InputAmount from "./components/inputs/InputAmount";
import InputCategory from "./components/inputs/InputCategory";
import InputDate from "./components/inputs/InputDate";
import InputDescription from "./components/inputs/InputDescription";
import InputParty from "./components/inputs/InputParty";
import { useState } from "react";
import {
  deleteTransaction,
  updateTransaction,
} from "../../services/transactionServices";
import useTransactionQuery from "../../hooks/useTransactionQuery";
import FormPannel from "./components/FormPannel";
import CloseButton from "./components/CloseButton";
import ConfirmDeletePrompt from "./components/ConfirmDeletePrompt";
import useUtilityContext from "../../hooks/useUtilityContext";
import Loading from "../utils/Loading";

function TransactionViewForm({ transaction, onClose: close }) {
  const {
    isProcessing,
    startProcessing,
    stopProcessing,
    setSuccessStatus,
    setErrorStatus,
  } = useUtilityContext();
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  const { updateCategories, updateParties, resetFilters } =
    useTransactionQuery();

  const defaultValues = {
    amount: transaction.amount,
    category: transaction.category,
    party: transaction.party,
    description: transaction.description,
    timestamp: new Date(transaction.timestamp),
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit = async (transactionData) => {
    startProcessing();
    const { data, err } = await updateTransaction(
      transaction._id,
      transactionData
    );
    if (err) {
      setErrorStatus(err);
    } else {
      if (data.updates) {
        updateCategories(data.updates.categories);
        updateParties(data.updates.parties);
      }
      setSuccessStatus("Transaction Updated Successfully");
      resetFilters();
      close();
    }
    stopProcessing();
  };
  const handleEditClick = (e) => {
    e.preventDefault();
    setEditMode(true);
  };
  const handleCancelClick = (e) => {
    e.preventDefault();
    setEditMode(false);
    setDeleteMode(false);
  };
  const handleDeleteClick = (e) => {
    e.preventDefault();
    setDeleteMode(true);
  };

  const handleDeleteConfirm = async (e) => {
    e.preventDefault();
    startProcessing();
    const { err } = await deleteTransaction(transaction._id);
    if (err) {
      setErrorStatus(err);
      setDeleteMode(false);
    } else {
      resetFilters();
      setSuccessStatus("Transaction Deleted Successfully");
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
            <Button
              success
              className="col-start-2 col-span-3"
              onClick={handleEditClick}
            >
              Edit
            </Button>
            <Button
              danger
              className="col-start-5 col-span-3"
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
          </>
        )}
        {editMode && (
          <>
            <Button success className="col-start-2 col-span-3">
              Save
            </Button>
            <Button
              danger
              className="col-start-5 col-span-3"
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
          </>
        )}
      </div>

      {/*
        Display ldelete prompt
       */}
      {deleteMode && (
        <ConfirmDeletePrompt
          onConfirm={handleDeleteConfirm}
          onCancel={handleCancelClick}
        />
      )}

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

export default TransactionViewForm;
