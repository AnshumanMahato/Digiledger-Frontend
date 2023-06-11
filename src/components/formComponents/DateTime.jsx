import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateTime({ field }) {
  const RefInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <input
      type="text"
      name="timesatmp"
      id="timestamp"
      className="form__input placeholder:text-slate-500"
      value={value}
      ref={ref}
      onClick={onClick}
      onChange={onChange}
      placeholder="dd/MM/yyyy hh:mm aa"
    />
  ));

  return (
    <DatePicker
      selected={field.value}
      onChange={field.onChange}
      customInput={<RefInput />}
      dateFormat="dd/MM/yyyy hh:mm aa"
      showTimeInput
      timeInputLabel="Time"
      maxDate={new Date()}
    />
  );
}

export default DateTime;
