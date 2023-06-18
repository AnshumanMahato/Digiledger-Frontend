import Section from "../components/utils/Section";
import TransactionsPanel from "../components/TransactionsPanel";
import SectionHeader from "../components/utils/SectionHeader";
import Button from "../components/utils/Button";
import Modal from "../components/Modal";
import { useState } from "react";
import TransactionForm from "../components/formComponents/TransactionForm";
import { BsFilter } from "react-icons/bs";
import FilterPanel from "../components/FilterPanel";

function Transactions() {
  const [showModal, setShowModal] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterPanel = () => {
    setShowFilters((current) => !current);
  };

  return (
    <main className="flex flex-col items-center w-full flex-grow">
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
              onClose={() => setShowModal(null)}
            />
          </Modal>
        )}
      </Section>
      <Section className="flex flex-col justify-evenly items-center">
        <SectionHeader className="mb-5">Transactions</SectionHeader>
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex-grow"></div>
            <Button
              className="border-2 rounded-md ml-5 flex items-center"
              onClick={handleFilterPanel}
            >
              <BsFilter />
              <span className="ml-2">Filter</span>
            </Button>
          </div>
          <TransactionsPanel />
          {showFilters && (
            <FilterPanel
              showFilters={showFilters}
              onClose={handleFilterPanel}
            />
          )}
        </div>
      </Section>
    </main>
  );
}

export default Transactions;
