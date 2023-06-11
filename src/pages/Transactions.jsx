import Section from "../components/utils/Section";
import TransactionsPanel from "../components/TransactionsPanel";
import SectionHeader from "../components/utils/SectionHeader";
import Button from "../components/utils/Button";
import useAuthorization from "../hooks/useAuthorization";
import Modal from "../components/Modal";
import { useState } from "react";
import TransactionForm from "../components/formComponents/TransactionForm";

function Transactions() {
  useAuthorization();
  const [showModal, setShowModal] = useState(null);

  return (
    <main className="flex flex-col justify-evenlt items-center w-full flex-grow">
      <Section className="flex justify-evenly items-center">
        <Button
          success
          className="rounded-md"
          onClick={() => setShowModal("income")}
        >
          Add Income
        </Button>
        <Button
          danger
          className="rounded-md"
          onClick={() => setShowModal("expense")}
        >
          Add Expense
        </Button>
        {showModal && (
          <Modal
            onClose={() => setShowModal(null)}
            className="flex flex-col justify-between"
          >
            <TransactionForm
              type={showModal}
              mode="entry"
              onClose={() => setShowModal(null)}
            />
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
