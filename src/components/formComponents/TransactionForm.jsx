import FormGroup from "./FormGroup";
import Input from "./Input";
import Button from "../utils/Button";
import DateTime from "./DateTime";

function TransactionForm() {
  return (
    <form className="border-2 border-primary shadow-md shadow-primary/50 px-8 py-10 my-10 rounded-2xl bg-accent text-white font-poppins grid grid-cols-2 gap-x-6">
      <FormGroup>
        <label htmlFor="amount" className="block text-xl font-bold mb-3">
          Amount
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          className="form__input placeholder:text-slate-500"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="timestamp" className="block text-xl font-bold mb-3">
          Date
        </label>
        <DateTime
          showIcon
          showTime
          className=""
          name="timestamp"
          id="timestamp"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="category" className="block text-xl font-bold mb-3">
          Category
        </label>
        <input
          type="text"
          name="category"
          id="category"
          className="form__input placeholder:text-slate-500"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="party" className="block text-xl font-bold mb-3">
          Party
        </label>
        <input
          type="text"
          name="party"
          id="party"
          className="form__input placeholder:text-slate-500"
        />
      </FormGroup>
      <FormGroup className="col-span-full">
        <label htmlFor="description" className="block text-xl font-bold mb-3">
          Note
        </label>
        <textarea
          name="description"
          id="desription"
          cols="50"
          rows="3"
          className="form__input"
        ></textarea>
      </FormGroup>
      <div className="flex justify-center items-center col-span-full">
        <Button success>Add Income</Button>
      </div>
    </form>
  );
}

export default TransactionForm;
