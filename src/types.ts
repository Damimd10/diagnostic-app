import { RegisterOptions } from "react-hook-form";

export type ControlType =
  | "text"
  | "select"
  | "numeric"
  | "checkbox"
  | "textarea";

export interface SelectOption {
  label: string;
  value: string;
}

type ConditionFunction = (args: any) => boolean;

export interface DynamicFieldData {
  fields?: DynamicFieldData[];
  label: string;
  inputType: ControlType;
  fieldName: string;
  defaultValue: any;
  options?: SelectOption[];
  config?: RegisterOptions;
  condition?: ConditionFunction;
}
