import { useForm } from "react-hook-form";
import FormGroup from "./FormGroup";
import Button from "../utils/Button";
import { loginRequest } from "../../services/authServices";
import { useEffect, useState } from "react";
import useUserContext from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

function SigninForm() {
  const navigate = useNavigate();
  const { currentUser, updateCurrentUser } = useUserContext();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard", {
        replace: true,
      });
    }
  }, [currentUser, navigate]);

  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const {
        data: { user },
      } = await loginRequest(data);
      updateCurrentUser(user);
      setError(null);
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  return (
    <form
      className="w-1/2 min-w-[20rem] border-2 border-primary shadow-md shadow-primary/50 px-8 py-10 my-10 rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>{error && <p className="text-red-500">{error}</p>}</FormGroup>
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
            maxLength: 20,
          })}
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
      </FormGroup>
      <div className="flex justify-center items-center">
        <Button success>Sign In</Button>
      </div>
    </form>
  );
}

export default SigninForm;
