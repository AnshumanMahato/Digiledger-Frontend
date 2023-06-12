import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import DateTime from "./DateTime";

const Input = forwardRef(({ label, type, id, name, errors, ...rest }, ref) => (
  <>
    <label htmlFor={id} className="block text-md font-bold mb-3">
      {label}
    </label>
    {type === "textarea" && (
      <textarea
        name={name}
        id={id}
        className="form__input"
        ref={ref}
        {...rest}
      />
    )}
    {type === "date" && (
      <Controller
        name={name}
        render={({ field }) => <DateTime field={field} />}
        {...rest}
      />
    )}
    {type !== "textarea" && type !== "date" && (
      <input
        type={type}
        id={id}
        name={name}
        className="form__input placeholder:text-slate-500"
        ref={ref}
        {...rest}
      />
    )}
    {errors[name] && <p>{errors[name].message}</p>}
  </>
));

/* ************************** Transaction Form Fields ************************ */

function InputAmount({ register, errors }) {
  return (
    <Input
      label="Amount"
      type="number"
      id="amount"
      errors={errors}
      {...register("amount", {
        required: "This field is required",
        min: { value: 1, message: "Minimum amount is 1" },
      })}
      step="0.01"
    />
  );
}

function InputCategory({ register, errors }) {
  return (
    <Input
      label="Category"
      type="text"
      id="category"
      errors={errors}
      {...register("category", {
        maxLength: {
          value: 10,
          message: "This field must have no more than 10 characters",
        },
        minLength: {
          value: 3,
          message: "This field must have at least 3 characters",
        },
      })}
    />
  );
}

function InputParty({ register, errors }) {
  return (
    <Input
      label="Party"
      type="text"
      id="party"
      errors={errors}
      className="form__input placeholder:text-slate-500"
      {...register("party", {
        required: "This field is required",
        maxLength: {
          value: 15,
          message: "This field must have no more than 10 characters",
        },
        minLength: {
          value: 3,
          message: "This field must have at least 3 characters",
        },
      })}
    />
  );
}

function InputDescription({ register, errors }) {
  return (
    <Input
      label="Note"
      type="textarea"
      id="description"
      cols="50"
      rows="3"
      errors={errors}
      {...register("description", {
        maxLength: {
          value: 100,
          message: "This field must have no more than 100 characters",
        },
      })}
    />
  );
}

function InputDate({ fieldname, control, errors }) {
  return (
    <Input
      label="Date"
      type="date"
      name={fieldname || "timestamp"}
      control={control}
      errors={errors}
      rules={{
        required: "This field is required",
      }}
    />
  );
}

/* ************************** User Form Fields ************************ */

function InputName({ registor, errors }) {}
function InputEmail({ registor, errors }) {}
function InputPassword({ registor, errors }) {}
function InputPasswordConfirm({ registor, errors }) {}

export {
  InputAmount,
  InputCategory,
  InputDate,
  InputDescription,
  InputParty,
  InputName,
  InputEmail,
  InputPassword,
  InputPasswordConfirm,
};
export default Input;
