import { Controller, UseControllerProps } from "react-hook-form";
import { FormControl, Textarea } from "@chakra-ui/react";
import { DynamicFieldData } from "../../types";

export default function TextAreaControl({
  control,
  defaultValue,
  fieldName,
}: DynamicFieldData & UseControllerProps) {
  return (
    <FormControl>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={fieldName}
        render={({ field: { onChange, ref } }) => (
          <Textarea onChange={onChange} placeholder="Comentarios" ref={ref} />
        )}
      />
    </FormControl>
  );
}
