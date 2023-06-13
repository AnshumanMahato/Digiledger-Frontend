import Section from "../components/utils/Section";
import TransactionsPanel from "../components/TransactionsPanel";
import SectionHeader from "../components/utils/SectionHeader";
import Button from "../components/utils/Button";
import useAuthorization from "../hooks/useAuthorization";
import Modal from "../components/Modal";
import { useState } from "react";
import TransactionForm from "../components/formComponents/TransactionForm";
import { BsFilter } from "react-icons/bs";
import FilterPanel from "../components/FilterPanel";

function Transactions() {
  useAuthorization();
  const [showModal, setShowModal] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [filters, setFilters] = useState({
    sort: "-timestamp",
    category: null,
    party: null,
    startDate: null,
    endDate: null,
  });

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
    setIsLoading(true);
  };
  const updatePage = (newPage) => {
    setCurrentPage(newPage);
    setIsLoading(true);
  };

  const handleFilterPanel = () => {
    setShowFilters((current) => !current);
  };

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
          <TransactionsPanel
            currentPage={currentPage}
            filters={filters}
            updatePage={updatePage}
            isLoading={isLoading}
            onLoad={() => setIsLoading(false)}
          />
          {showFilters && (
            <FilterPanel
              showFilters={showFilters}
              filters={filters}
              updateFilters={updateFilters}
              onClose={handleFilterPanel}
            />
          )}
        </div>
      </Section>
    </main>
  );
}

export default Transactions;
