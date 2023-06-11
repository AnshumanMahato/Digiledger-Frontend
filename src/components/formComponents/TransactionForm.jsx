import FormGroup from "./FormGroup";
import Button from "../utils/Button";
import DateTime from "./DateTime";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import classNames from "classnames";

function TransactionForm({ type, mode, onClose: close }) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const formClasses = classNames(
    "relative border-2 border-white shadow-white/50 shadow-md px-5 py-8 sm:px-8 sm:py-10 my-10 rounded-2xl bg-accent text-white font-poppins grid grid-cols-2 gap-x-4 sm:gap-x-6"
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClasses}>
      <span
        onClick={close}
        className="text-white text-xl font-bold absolute right-[5%] top-[5%] p-1 hover:text-red-400 cursor-pointer"
      >
        <AiOutlineClose />
      </span>
      <FormGroup className="col-span-full"></FormGroup>
      <FormGroup>
        <label htmlFor="amount" className="block text-md font-bold mb-3">
          Amount
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          className="form__input placeholder:text-slate-500"
          {...register("amount", { required: true, min: 1 })}
        />
        {errors.amount && errors.amount.type === "required" && (
          <p>This field is required</p>
        )}
        {errors.amount && errors.amount.type === "min" && (
          <p>Minimum amount is 1</p>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor="timestamp" className="block text-md font-bold mb-3">
          Date
        </label>
        <Controller
          control={control}
          name="timestamp"
          render={({ field }) => <DateTime className="" field={field} />}
          rules={{ required: true }}
        />
        {errors.timestamp && errors.timestamp.type === "required" && (
          <p>This field is required</p>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor="category" className="block text-md font-bold mb-3">
          Category
        </label>
        <input
          type="text"
          name="category"
          id="category"
          className="form__input placeholder:text-slate-500"
          {...register("category", {
            maxLength: 10,
            minLength: 3,
          })}
        />
        {errors.category && errors.category.type === "minLength" && (
          <p>This field must have at least 3 characters</p>
        )}
        {errors.category && errors.category.type === "maxLength" && (
          <p>This field must have no more than 10 characters</p>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor="party" className="block text-md font-bold mb-3">
          Party
        </label>
        <input
          type="text"
          name="party"
          id="party"
          className="form__input placeholder:text-slate-500"
          {...register("party", {
            required: true,
            minLength: 3,
            maxLength: 15,
          })}
        />
        {errors.party && errors.party.type === "required" && (
          <p>This field is required</p>
        )}
        {errors.party && errors.party.type === "minLength" && (
          <p>This field must have at least 3 characters</p>
        )}
        {errors.party && errors.party.type === "maxLength" && (
          <p>This field must have no more than 15 characters</p>
        )}
      </FormGroup>
      <FormGroup className="col-span-full">
        <label htmlFor="description" className="block text-md font-bold mb-3">
          Note
        </label>
        <textarea
          name="description"
          id="desription"
          cols="50"
          rows="3"
          className="form__input"
          {...register("description", {
            maxLength: 100,
          })}
        ></textarea>
        {errors.description && errors.description.type === "maxLength" && (
          <p>This field must have no more than 100 characters</p>
        )}
      </FormGroup>
      <div className="flex justify-evenly items-center col-span-full">
        {mode === "entry" && (
          <>
            {type === "income" && <Button success>Add Income</Button>}
            {type === "expense" && <Button success>Add Expense</Button>}
          </>
        )}
        {mode === "view" && <></>}
      </div>
    </form>
  );
}

export default TransactionForm;
