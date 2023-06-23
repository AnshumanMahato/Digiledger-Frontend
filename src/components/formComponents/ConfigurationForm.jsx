import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";
import FormGroup from "./FormGroup";
import useUserContext from "../../hooks/useUserContext";
import { useEffect, useState } from "react";
import currencies from "../../utils/currencyArray.json";
import { useForm } from "react-hook-form";

function ConfigurationForm() {
  const navigate = useNavigate();
  const { currentUser, updateCurrentUser } = useUserContext();

  useEffect(() => {
    if (currentUser.isConfigured) {
      navigate("/dashboard", {
        replace: true,
      });
    }
  }, [currentUser, navigate]);

  const [error, setError] = useState(null);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(currencies);
  };

  return (
    <form
      className="w-1/2 min-w-[20rem] border-2 border-primary shadow-md shadow-primary/50 px-8 py-10 my-10 rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>{error && <p className="text-red-500">{error}</p>}</FormGroup>

      <div className="flex justify-center items-center">
        <Button success>Sign Up</Button>
      </div>
    </form>
  );
}

export default ConfigurationForm;
