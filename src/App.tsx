import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Box,
  Card,
  Container,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";

import Form from "./components/Form";

import SCHEMAS from "./config/schemas";
import { DynamicFieldData } from "./types";

interface DiagnosticGroup {
  label: string;
  value: string;
}

const DIAGNOSTIC_GROUPS: DiagnosticGroup[] = [
  {
    label: "Internado",
    value: "onPatient",
  },
  {
    label: "Infarto de Miocardio",
    value: "myocardialInfarction",
  },
  {
    label: "Embolia pulmonar",
    value: "pulmonaryEmbolism",
  },
];

interface FormSchema {
  [key: string]: DynamicFieldData[];
}

interface FormValues {
  diagnostics: DiagnosticGroup[] | null;
}

const DEFAULT_VALUES: FormValues = { diagnostics: [] };

const removeDuplicates = (list: DynamicFieldData[]) =>
  list.filter(
    (item, index) =>
      index ===
      list.findIndex((otherItem) => item.fieldName === otherItem.fieldName),
  );

function App() {
  const [form, setForm] = useState<FormSchema>({});

  const { control, watch } = useForm<FormValues>({
    defaultValues: DEFAULT_VALUES,
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const diagnostics = value.diagnostics;
      const isDiagnosticChange = name === "diagnostics" && type === "change";

      if (isDiagnosticChange && diagnostics && diagnostics.length > 0) {
        const forms = diagnostics.map(
          (diagnostic) => SCHEMAS[diagnostic?.value],
        );

        const parsedSections = forms.flat().reduce((acc, form) => {
          const [key] = Object.keys(form);
          return {
            ...acc,
            [key]: removeDuplicates([...(acc[key] || []), ...form[key]]),
          };
        }, {});

        setForm(parsedSections);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Container maxW="md" p={4}>
      <Card p={4} variant="elevated">
        <Controller
          control={control}
          name="diagnostics"
          render={({ field, fieldState: { error } }) => (
            <FormControl pb={4} isInvalid={!!error} id="diagnostic">
              <FormLabel>Diagnostico de internacion</FormLabel>
              <Select
                {...field}
                isMulti
                options={DIAGNOSTIC_GROUPS}
                placeholder="Diagnostico"
              />
              <FormErrorMessage>{error && error.message}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Divider />
        {Object.entries(form).map(([key, value]) => (
          <Box py={4}>
            <Heading key={key} size="xs" textTransform="uppercase" py={2}>
              {key}
            </Heading>
            <Divider />
            <Form fields={value} />
          </Box>
        ))}
      </Card>
    </Container>
  );
}

export default App;
