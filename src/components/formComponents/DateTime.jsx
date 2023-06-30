import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateTime({ field, disabled, className }) {
  const RefInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <input
      type="text"
      name="timesatmp"
      id="timestamp"
      className={className}
      value={value}
      ref={ref}
      onClick={onClick}
      onChange={onChange}
      placeholder="dd/MM/yyyy hh:mm aa"
      disabled={disabled}
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
      disabled={disabled}
    />
  );
}

export default DateTime;
