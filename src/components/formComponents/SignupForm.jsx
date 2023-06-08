import { useForm } from "react-hook-form";
import FormGroup from "./FormGroup";
import Button from "../utils/Button";
import { useState } from "react";

function SignupForm() {
  const [error, setError] = useState(null);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const getPasswordField = watch("password");

  return (
    <form
      className="w-1/2 min-w-[20rem] border-2 border-primary shadow-md shadow-primary/50 px-8 py-10 my-10 rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>{error && <p className="text-red-500">{error}</p>}</FormGroup>
      <FormGroup>
        <label htmlFor="name" className="block text-xl font-bold mb-3">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form__input placeholder:text-slate-500"
          {...register("name", {
            required: true,
            minLength: 3,
            maxLength: 30,
          })}
        />
        {errors.name && errors.name.type === "required" && (
          <p>This field is required</p>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <p>This field must have at least 3 characters</p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p>This field must have no more than 20 characters</p>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor="email" className="block text-xl font-bold mb-3">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form__input placeholder:text-slate-500"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <p>This field is required</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p>This field must be a valid email address</p>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor="password" className="block text-xl font-bold mb-3">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form__input placeholder:text-slate-500"
          {...register("password", {
            required: true,
            minLength: 8,
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>This field is required</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>This field must have at least 8 characters</p>
        )}
      </FormGroup>
      <FormGroup>
        <label
          htmlFor="passwordConfirm"
          className="block text-xl font-bold mb-3"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          className="form__input placeholder:text-slate-500"
          {...register("passwordConfirm", {
            required: true,
            validate: (value) => value === getPasswordField,
          })}
        />
        {errors.passwordConfirm &&
          errors.passwordConfirm.type === "required" && (
            <p>This field is required</p>
          )}
        {errors.passwordConfirm &&
          errors.passwordConfirm.type === "validate" && (
            <p>This field must match the password</p>
          )}
      </FormGroup>
      <div className="flex justify-center items-center">
        <Button success>Sign Up</Button>
      </div>
    </form>
  );
}

export default SignupForm;
