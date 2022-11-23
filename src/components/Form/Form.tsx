import { FormProvider, useForm } from "react-hook-form";
import { DynamicFieldData } from "../../types";
import DynamicControl from "../DynamicControl";

interface FormProps {
  fields: DynamicFieldData[];
}

export default function Form({ fields }: FormProps) {
  const formMethods = useForm();

  return (
    <form>
      <FormProvider {...formMethods}>
        {fields.map((currentField) => (
          <DynamicControl key={currentField.fieldName} {...currentField} />
        ))}
      </FormProvider>
    </form>
  );
}
