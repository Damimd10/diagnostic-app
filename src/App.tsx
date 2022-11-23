import { Controller, useForm } from "react-hook-form";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { Select } from "chakra-react-select";

import Form from "./components/Form";

import SCHEMAS from "./config/schemas";

interface DiagnosticGroup {
  label: string;
  value: string;
}

const DIAGNOSTIC_GROUPS: DiagnosticGroup[] = [
  {
    label: "Infarto de Miocardio",
    value: "myocardialInfarction",
  },
  {
    label: "Cirugia de Bypass Coronario",
    value: "coronaryBypassSurgery",
  },
];

interface FormValues {
  diagnostic: DiagnosticGroup | null;
}

const DEFAULT_VALUES: FormValues = { diagnostic: null };

function App() {
  const { control, handleSubmit, register, watch } = useForm<FormValues>({
    defaultValues: DEFAULT_VALUES,
  });

  const watchedDiagnostic = watch("diagnostic");
  let fields = [];

  if (watchedDiagnostic?.value) {
    const value: string = watchedDiagnostic.value;
    fields = SCHEMAS[value] || [];
  }

  return (
    <div>
      <Controller
        control={control}
        name="diagnostic"
        render={({ field, fieldState: { error } }) => (
          <FormControl isInvalid={!!error} id="diagnostic">
            <FormLabel>Diagnostico de Internacion</FormLabel>
            <Select
              {...field}
              options={DIAGNOSTIC_GROUPS}
              placeholder="Diagnostico"
            />

            <FormErrorMessage>{error && error.message}</FormErrorMessage>
          </FormControl>
        )}
      />
      <Form fields={fields} />
    </div>
  );
}

export default App;
