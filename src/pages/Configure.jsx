import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import ConfigurationForm from "../components/formComponents/ConfigurationForm";

function Configure() {
  const { currentUser } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser.isConfigured) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);
  return (
    <main className="flex flex-col justify-between items-center w-full py-10">
      <h1 className="font-bold text-3xl text-center">
        Before you begin, let's setup your preferences
      </h1>
      <ConfigurationForm />
    </main>
  );
}

export default Configure;
