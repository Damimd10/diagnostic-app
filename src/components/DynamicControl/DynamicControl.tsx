import {
  Controller,
  UseControllerProps,
  useFormContext,
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
import TextAreaControl from "../TextAreaControl";

const DYNAMIC_COMPONENTS: Record<ControlType, any> = {
  checkbox: CheckControl,
  numeric: NumericControl,
  select: () => null,
  text: TextControl,
  textarea: TextAreaControl,
};

function CheckControl({
  defaultValue,
  label,
  control,
  fieldName,
}: DynamicFieldData & Pick<UseControllerProps, "control">) {
  return (
    <FormControl>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={fieldName}
        render={({ field: { onChange, ref, value } }) => (
          <Checkbox isChecked={value} onChange={onChange} ref={ref}>
            {label}
          </Checkbox>
        )}
      />
    </FormControl>
  );
}

function NumericControl({
  control,
  defaultValue,
  fieldName,
  label,
}: DynamicFieldData & Pick<UseControllerProps, "control">) {
  return (
    <FormControl>
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
    </FormControl>
  );
}

function TextControl({
  control,
  defaultValue,
  fieldName,
  label,
}: DynamicFieldData & Pick<UseControllerProps, "control">) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        name={fieldName}
        render={({ field: { onChange, ref } }) => (
          <Input
            defaultValue={defaultValue}
            onChange={onChange}
            ref={ref}
            type="text"
          />
        )}
      />
    </FormControl>
  );
}

export default function DynamicControl({
  inputType,
  fieldName,
  defaultValue,
  label,
  options = [],
  config = {},
}: DynamicFieldData) {
  const { control, register } = useFormContext();

  const DynamicComponent = DYNAMIC_COMPONENTS[inputType];

  if (!DynamicComponent) return null;

  return (
    <DynamicComponent
      config={config}
      control={control}
      defaultValue={defaultValue}
      fieldName={fieldName}
      label={label}
      register={register}
    />
  );
}
