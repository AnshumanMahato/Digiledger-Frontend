import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import ConfigurationForm from "../components/forms/ConfigurationForm";
import useUtilityContext from "../hooks/useUtilityContext";
import Modal from "../components/layouts/Modal";
import Loading from "../components/utils/Loading";

function Configure() {
  const { isProcessing } = useUtilityContext();
  const { currentUser } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser.isConfigured) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

  return (
    <main className="flex flex-col justify-between items-center w-full py-10">
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
        Before you begin, let's setup your preferences
      </h1>
      <ConfigurationForm />
      {isProcessing && (
        <Modal>
          <Loading />
        </Modal>
      )}
    </main>
  );
}

export default Configure;
