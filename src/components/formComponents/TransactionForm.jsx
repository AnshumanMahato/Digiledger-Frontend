import FormGroup from "./FormGroup";
import Input from "./Input";
import Button from "../utils/Button";
import { useState } from "react";

function TransactionForm() {
  const [myDate, setMyDate] = useState(null);

  return (
    <form className="border-2 border-primary shadow-md shadow-primary/50 px-8 py-10 my-10 rounded-2xl bg-accent text-white font-poppins">
      <FormGroup>
        <Input type="number" label="Amount" id="amount" step="0.01" />
      </FormGroup>
      <FormGroup>
        <div>
          <label for="date">Date:</label>
          <input
            id="date"
            type="date"
            value={myDate}
            onChange={(e) => setMyDate(e.target.value)}
          />
          <label for="time">Time:</label>
          <input
            id="time"
            type="time"
            value={myDate}
            onChange={(e) => setMyDate(e.target.value)}
          />
        </div>
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
