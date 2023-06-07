import FormGroup from "./FormGroup";
import Input from "./Input";
import Button from "../utils/Button";
import DatePicker from "react-datepicker";

function TransactionForm() {
  return (
    <form className="border-2 border-primary shadow-md shadow-primary/50 px-8 py-10 my-10 rounded-2xl bg-accent text-white font-poppins">
      <FormGroup>
        <Input type="number" label="Amount" id="amount" step="0.01" />
      </FormGroup>
      <FormGroup>
        <label>Date and Time</label>
        <DatePicker showIcon showTimeInput />
      </FormGroup>
      <FormGroup>
        <Input type="text" label="Category" id="category" />
      </FormGroup>
      <FormGroup>
        <Input type="text" label="Category" id="category" />
      </FormGroup>
      <div className="flex justify-center items-center">
        <Button success>Sign In</Button>
      </div>
    </form>
  );
}

export default TransactionForm;
