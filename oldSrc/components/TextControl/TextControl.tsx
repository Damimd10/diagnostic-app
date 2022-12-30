import { Controller, UseControllerProps } from "react-hook-form";
import { FormLabel, Input } from "@chakra-ui/react";

import { DynamicFieldData } from "../../types";

export default function TextControl({
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
        render={({ field: { onChange, ref } }) => (
          <Input
            defaultValue={defaultValue}
            onChange={onChange}
            ref={ref}
            type="text"
          />
        )}
      />
    </>
  );
}
