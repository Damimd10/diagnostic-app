import { Controller, useFormContext } from "react-hook-form";
import {
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { DynamicFieldData } from "../../types";

const DYNAMIC_COMPONENTS: any = {
  checkbox: CheckControl,
  numeric: NumericControl,
  text: TextControl,
};

function CheckControl({
  defaultValue,
  label,
  control,
  fieldName,
}: DynamicFieldData & { control: any; register: any }) {
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
}: DynamicFieldData & { control: any }) {
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
  config,
  control,
  defaultValue,
  fieldName,
  label,
  register,
}: DynamicFieldData & { control: any; register: any }) {
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
      <FormHelperText>We'll never share your email.</FormHelperText>
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
