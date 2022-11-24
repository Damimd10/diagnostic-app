import {
  Controller,
  UseControllerProps,
  useFormContext,
  useWatch,
} from "react-hook-form";
import {
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import { ControlType, DynamicFieldData } from "../../types";

import CheckControl from "../CheckControl";
import NumericControl from "../NumericControl";
import TextAreaControl from "../TextAreaControl";
import TextControl from "../TextControl";

const DYNAMIC_COMPONENTS: Record<ControlType, any> = {
  checkbox: CheckControl,
  numeric: NumericControl,
  select: () => null,
  text: TextControl,
  textarea: TextAreaControl,
};

export default function DynamicControl({
  config = {},
  defaultValue,
  fieldName,
  fields = [],
  inputType,
  label,
  options = [],
}: DynamicFieldData) {
  const { control, register, watch } = useFormContext();

  const watchedValue = watch(fieldName);

  const DynamicComponent = DYNAMIC_COMPONENTS[inputType];

  if (!DynamicComponent) return null;

  const hasChildrens = fields.length > 0;

  return (
    <FormControl py={2}>
      <DynamicComponent
        config={config}
        control={control}
        defaultValue={defaultValue}
        fieldName={fieldName}
        fields={fields}
        label={label}
        register={register}
      />
      {hasChildrens &&
        fields.map((currentField) =>
          currentField.condition?.(watchedValue) ? (
            <FormControl py={2}>
              <DynamicControl key={currentField.fieldName} {...currentField} />
            </FormControl>
          ) : null,
        )}
    </FormControl>
  );
}
