import { Checkbox, FormControl, FormLabel } from "@chakra-ui/react";
import { Controller, UseControllerProps, useWatch } from "react-hook-form";
import { DynamicFieldData } from "../../types";

export default function CheckControl({
  defaultValue,
  label,
  control,
  fieldName,
}: DynamicFieldData & Pick<UseControllerProps, "control">) {
  return (
    <>
      <FormLabel>{label}</FormLabel>
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
    </>
  );
}
