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
import { useState } from "react";
import {
  deleteTransaction,
  updateTransaction,
} from "../../services/transactionServices";
import useTransactionQuery from "../../hooks/useTransactionQuery";
import FormPannel from "./components/FormPannel";
import CloseButton from "./components/CloseButton";
import ConfirmDeletePrompt from "./components/ConfirmDeletePrompt";
import useUIContext from "../../hooks/useUIContext";

function TransactionViewForm({ transaction, onClose: close }) {
  const { setSuccessStatus, setErrorStatus } = useUIContext();
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

  const onSubmit = async (formData) => {
    const { data, err } = await updateTransaction(transaction._id, formData);
    if (err) {
      setErrorStatus(err);
    }
    if (data) {
      if (data.updates) {
        updateCategories(data.updates.categories);
        updateParties(data.updates.parties);
      }
      setSuccessStatus("Transaction Updated Successfully");
      resetFilters();
      close();
    }
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
    const { data, err } = await deleteTransaction(transaction._id);
    if (err) {
      setErrorStatus(err);
      setDeleteMode(false);
    }
    if (data) {
      resetFilters();
      setSuccessStatus("Transaction Deleted Successfully");
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
      {deleteMode && (
        <ConfirmDeletePrompt
          onConfirm={handleDeleteConfirm}
          onCancel={handleCancelClick}
        />
      )}
    </FormPannel>
  );
}

export default TransactionViewForm;
