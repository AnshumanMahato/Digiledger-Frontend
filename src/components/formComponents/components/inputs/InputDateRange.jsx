import FormGroup from "../FormGroup";
import Input from "./Input";

function InputDateRange({
  fieldname,
  control,
  errors,
  watch,
  values,
  ...rest
}) {
  const watchFrom = watch("startDate", new Date());
  const watchTo = watch("startDate", new Date());

  return (
    <>
      <FormGroup>
        <Input
          label="From"
          type="date"
          name="startDate"
          control={control}
          errors={errors}
          rules={{
            required: "This field is required",
            validate: (value) =>
              value <= watchTo || "Must be a date before the 'to' date",
          }}
          {...rest}
        />
      </FormGroup>
      <FormGroup>
        <Input
          label="To"
          type="date"
          name="endDate"
          control={control}
          errors={errors}
          rules={{
            required: "This field is required",
            validate: (value) =>
              value >= watchFrom || "Must be a date after the 'From' date",
          }}
          {...rest}
        />
      </FormGroup>
    </>
  );
}

export default InputDateRange;
