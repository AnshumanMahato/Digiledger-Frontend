import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateTime(className, ...rest) {
  const [startDate, setStartDate] = useState(new Date());
  const RefInput = forwardRef(({ value, onClick }, ref) => (
    <input
      type="text"
      name="timesatmp"
      id="timestamp"
      className="form__input placeholder:text-slate-500"
      value={value}
      ref={ref}
      onClick={onClick}
    />
  ));

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<RefInput />}
      dateFormat="dd/MM/yyyy hh:mm aa"
      showTimeInput
      timeInputLabel="Time"
      maxDate={new Date()}
      {...rest}
    />
  );
}

export default DateTime;
