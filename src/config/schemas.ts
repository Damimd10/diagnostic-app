const abcScale = {
  fieldName: "abcScale",
  inputType: "numeric",
  label: "Escala ABC",
  defaultValue: 0,
};

const hypertension = {
  fieldName: "hypertension",
  inputType: "checkbox",
  label: "Hipertension",
  defaultValue: false,
};

const SCHEMAS = {
  myocardialInfarction: [hypertension, abcScale],
};

export default SCHEMAS;
