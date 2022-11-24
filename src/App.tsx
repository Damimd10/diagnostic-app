import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
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
    label: "Infarto de Miocardio",
    value: "myocardialInfarction",
  },
  {
    label: "Cirugia de Bypass Coronario",
    value: "coronaryBypassSurgery",
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
      /* if (
        name === "diagnostic" &&
        type === "change" &&
        value.diagnostic?.length
      ) {
        const schemas = value.diagnostic.map(
          // @ts-ignore
          (current) => SCHEMAS[current.value],
        );

        const flattenFields: DynamicFieldData[] = schemas.flat();
        const filteredFields = flattenFields.filter(
          (currentField, index) =>
            index ===
            flattenFields.findIndex(
              (otherField) => currentField.fieldName === otherField.fieldName,
            ),
        );

        setFields(filteredFields);
      } */
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
              <FormLabel>Diagnostico de Internacion</FormLabel>
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
          <>
            <Heading key={key} size="xs" textTransform="uppercase">
              {key}
            </Heading>
            <Form fields={value} />
          </>
        ))}
      </Card>
    </Container>
  );
}

export default App;
