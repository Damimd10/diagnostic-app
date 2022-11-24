import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Card,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Container,
} from "@chakra-ui/react";
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
  const [fields, setFields] = useState([]);

  const { control, watch } = useForm<FormValues>({
    defaultValues: DEFAULT_VALUES,
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (
        name === "diagnostic" &&
        type === "change" &&
        value.diagnostic &&
        value.diagnostic.value
      ) {
        // @ts-ignore
        setFields(SCHEMAS[value.diagnostic.value]);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Container maxW="md" p={4}>
      <Card p={4} variant="elevated">
        <Controller
          control={control}
          name="diagnostic"
          render={({ field, fieldState: { error } }) => (
            <FormControl pb={4} isInvalid={!!error} id="diagnostic">
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
        <Divider />
        <Form fields={fields} />
      </Card>
    </Container>
  );
}

export default App;
