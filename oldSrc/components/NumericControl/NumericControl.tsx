import {
  FormLabel,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { Controller, UseControllerProps } from "react-hook-form";

import { DynamicFieldData } from "../../types";

export default function NumericControl({
  control,
  defaultValue,
  fieldName,
  label,
}: DynamicFieldData & Pick<UseControllerProps, "control">) {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        name={fieldName}
        render={() => (
          <NumberInput defaultValue={defaultValue}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        )}
      />
    </>
  );
}
