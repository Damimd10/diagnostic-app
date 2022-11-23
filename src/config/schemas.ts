const abcScale = {
  fieldName: "abcScale",
  inputType: "numeric",
  label: "Escala ABC",
  defaultValue: 0,
};

const comment = {
  fieldName: "comment",
  inputType: "textarea",
  label: "Comentarios",
  defaultValue: "",
};

const hypertension = {
  fieldName: "hypertension",
  inputType: "checkbox",
  label: "Hipertension",
  defaultValue: false,
};

const SCHEMAS = {
  myocardialInfarction: [hypertension, abcScale, comment],
};

export default SCHEMAS;
