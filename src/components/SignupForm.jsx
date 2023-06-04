import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const [form, setForm] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateForm = (updates) => {
    const copy = { ...form };
    for (const [key, value] of Object.entries(updates)) {
      copy[key] = value;
    }
    setForm(copy);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        {...register("name", {
          required: true,
          minLength: 3,
          maxLength: 20,
        })}
        onChange={(e) => updateForm({ name: e.target.value })}
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

      <label>Email</label>
      <input
        type="email"
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
        onChange={(e) => updateForm({ email: e.target.value })}
      />
      {errors.email && errors.email.type === "required" && (
        <p>This field is required</p>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <p>This field must be a valid email address</p>
      )}

      <label>Password</label>
      <input
        type="password"
        {...register("password", {
          required: true,
          minLength: 8,
          maxLength: 20,
        })}
        onChange={(e) => updateForm({ password: e.target.value })}
      />
      {errors.password && errors.password.type === "required" && (
        <p>This field is required</p>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <p>This field must have at least 8 characters</p>
      )}
      {errors.password && errors.password.type === "maxLength" && (
        <p>This field must have no more than 20 characters</p>
      )}

      <label>Confirm Password</label>
      <input
        type="password"
        {...register("passwordConfirm", {
          required: true,
          validate: (value) => value === form.password,
        })}
      />
      {errors.passwordConfirm && errors.passwordConfirm.type === "required" && (
        <p>This field is required</p>
      )}
      {errors.passwordConfirm && errors.passwordConfirm.type === "validate" && (
        <p>This field must match the password</p>
      )}

      <button type="submit">Sign Up</button>
    </form>
  );
}
