import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import DateTime from "./DateTime";
import FormGroup from "./FormGroup";
import useTransactionQuery from "../../hooks/useTransactionQuery";
import currencies from "../../utils/currencyArray.json";

const Input = forwardRef(
  (
    { label, type, id, name, errors, control, rules, options, ...rest },
    ref
  ) => {
    return (
      <>
        <label htmlFor={id} className="block text-base font-bold mb-3">
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
        {type === "select" && (
          <select
            id={id}
            name={name}
            className="form__input placeholder:text-slate-500"
            ref={ref}
            {...rest}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
        {type !== "textarea" && type !== "date" && type !== "select" && (
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
    );
  }
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
  const { categories } = useTransactionQuery();
  return (
    <>
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
        list="categories"
        {...rest}
      />
      <datalist id="categories">
        {categories.current.map((category) => (
          <option key={category} value={category} />
        ))}
      </datalist>
    </>
  );
}

function InputParty({ register, errors, ...rest }) {
  const { parties } = useTransactionQuery();
  return (
    <>
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
        list="parties"
        {...rest}
      />
      <datalist id="parties">
        {parties.current.map((party) => (
          <option key={party} value={party} />
        ))}
      </datalist>
    </>
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
function InputPassword({ register, errors, current, update }) {
  const label = current
    ? "Current Password"
    : update
    ? "New Password"
    : "Password;";

  const name = current ? "passwordCurrent" : "password";
  return (
    <Input
      label={label}
      type="password"
      id={name}
      className="form__input placeholder:text-slate-500"
      errors={errors}
      {...register(name, {
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

InputPassword.propTypes = {
  checkVariation: ({ current, update }) => {
    const count = Number(!!current + !!update);
    if (count > 1)
      return new Error("Only one of current or update can be true");
  },
};

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

function InputCurrency({ register, errors, ...rest }) {
  return (
    <>
      <Input
        label="Currency"
        type="text"
        id="currency"
        errors={errors}
        className="form__input placeholder:text-slate-500"
        {...register("currency", {
          required: "This field is required",
          validate: (value) =>
            currencies.filter((currency) => currency.code === value.trim())
              .length === 1 || "This field must be a valid currency code",
        })}
        list="currencies"
        {...rest}
      />
      <datalist id="currencies">
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.name}
          </option>
        ))}
      </datalist>
    </>
  );
}

function InputValueSystem({ register, errors, ...rest }) {
  const options = [
    {
      label: "International",
      value: "en",
    },
    {
      label: "Indian",
      value: "en-IN",
    },
  ];
  return (
    <Input
      label="Value System"
      type="select"
      id="valueSystem"
      errors={errors}
      {...register("valueSystem", {
        required: "Thie field is required",
      })}
      options={options}
      {...rest}
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
  InputCurrency,
  InputValueSystem,
};
export default Input;
