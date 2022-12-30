import { Controller, UseControllerProps } from "react-hook-form";
import { FormLabel, Textarea } from "@chakra-ui/react";
import { DynamicFieldData } from "../../types";

export default function TextAreaControl({
  control,
  defaultValue,
  fieldName,
  label,
}: DynamicFieldData & UseControllerProps) {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={fieldName}
        render={({ field: { onChange, ref } }) => (
          <Textarea onChange={onChange} placeholder="Comentarios" ref={ref} />
        )}
      />
    </>
  );
}
