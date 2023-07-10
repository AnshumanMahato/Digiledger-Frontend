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
    <main className="flex flex-col w-full flex-grow py-5">
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
        <SectionHeader className="mb-2 xs:mb-3 sm:mb-5">
          Transactions
        </SectionHeader>
        <div className="w-full">
          <div className="flex justify-between">
            <div className="flex-grow">
              {/* TODO This div here is to show breadcrumbs to display all set filters. Yet to be implemented */}
            </div>
            <Button
              className="border-2 rounded-md ml-4 flex items-center"
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
