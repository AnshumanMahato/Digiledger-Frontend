import Section from "../components/utils/Section";
import TransactionsPanel from "../components/TransactionsPanel";
import SectionHeader from "../components/utils/SectionHeader";
import Button from "../components/utils/Button";
import useAuthorization from "../hooks/useAuthorization";
import Modal from "../components/Modal";
import { useState } from "react";
import TransactionForm from "../components/formComponents/TransactionForm";

function Transactions() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  return (
    <main className="flex flex-col justify-between items-center w-full">
      <Section className="flex justify-evenly items-center">
        <Button success className="rounded-md" onClick={handleClick}>
          Add Income
        </Button>
        <Button danger className="rounded-md">
          Add Expense
        </Button>
        {showModal && (
          <Modal
            onClose={handleClose}
            className="flex flex-col justify-between"
          >
            <TransactionForm />
          </Modal>
        )}
      </Section>
      <Section className="flex flex-col justify-evenly items-center">
        <SectionHeader className="mb-5">Transactions</SectionHeader>
        <TransactionsPanel />
      </Section>
    </main>
  );
}

export default Transactions;
