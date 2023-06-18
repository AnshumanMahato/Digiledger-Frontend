import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import DateTime from "./DateTime";
import FormGroup from "./FormGroup";

const Input = forwardRef(
  ({ label, type, id, name, errors, control, rules, ...rest }, ref) => (
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
          render={({ field }) => <DateTime field={field} {...rest} />}
          control={control}
          rules={rules}
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
  )
);

/* ************************** Transaction Form Fields ************************ */

function InputAmount({ register, errors, ...rest }) {
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
      {...rest}
    />
  );
}

function InputCategory({ register, errors, ...rest }) {
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
      {...rest}
    />
  );
}

function InputParty({ register, errors, ...rest }) {
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
      {...rest}
    />
  );
}

function InputDescription({ register, errors, ...rest }) {
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
      {...rest}
    />
  );
}

function InputDate({ fieldname, control, errors, ...rest }) {
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
      {...rest}
    />
  );
}

function InputDateRange({
  fieldname,
  control,
  errors,
  watch,
  values,
  ...rest
}) {
  const watchFrom = watch("startDate", new Date());
  const watchTo = watch("startDate", new Date());

  return (
    <>
      <FormGroup>
        <Input
          label="From"
          type="date"
          name="startDate"
          control={control}
          errors={errors}
          rules={{
            required: "This field is required",
            validate: (value) =>
              value <= watchTo || "Must be a date before the 'to' date",
          }}
          {...rest}
        />
      </FormGroup>
      <FormGroup>
        <Input
          label="To"
          type="date"
          name="endDate"
          control={control}
          errors={errors}
          rules={{
            required: "This field is required",
            validate: (value) =>
              value >= watchFrom || "Must be a date after the 'From' date",
          }}
          {...rest}
        />
      </FormGroup>
    </>
  );
}

/* ************************** User Form Fields ************************ */

function InputName({ register, errors }) {
  return (
    <Input
      label="Name"
      type="text"
      id="name"
      className="form__input placeholder:text-slate-500"
      errors={errors}
      {...register("name", {
        required: '"This field is required"',
        maxLength: {
          value: 30,
          message: "This field must have no more than 30 characters",
        },
        minLength: {
          value: 3,
          message: "This field must have at least 3 characters",
        },
      })}
    />
  );
}
function InputEmail({ register, errors, ...rest }) {
  return (
    <Input
      label="Email"
      type="email"
      id="email"
      className="form__input placeholder:text-slate-500"
      errors={errors}
      {...register("email", {
        required: "This field is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "This field must be a valid email address",
        },
      })}
      {...rest}
    />
  );
}
function InputPassword({ register, errors }) {
  return (
    <Input
      label="Password"
      type="password"
      id="password"
      className="form__input placeholder:text-slate-500"
      errors={errors}
      {...register("password", {
        required: "This field is required",
        maxLength: {
          value: 20,
          message: "This field must have no more than 20 characters",
        },
        minLength: {
          value: 8,
          message: "This field must have at least 8 characters",
        },
      })}
    />
  );
}
function InputPasswordConfirm({ register, errors, getPasswordField }) {
  return (
    <Input
      label="Confirm Password"
      type="password"
      id="passwordConfirm"
      errors={errors}
      className="form__input placeholder:text-slate-500"
      {...register("passwordConfirm", {
        required: "This field is required",
        validate: (value) =>
          value === getPasswordField || "This field must match the password",
      })}
    />
  );
}

export {
  InputAmount,
  InputCategory,
  InputDate,
  InputDateRange,
  InputDescription,
  InputParty,
  InputName,
  InputEmail,
  InputPassword,
  InputPasswordConfirm,
};
export default Input;
