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

const diabetic = {
  fieldName: "diabetic",
  inputType: "checkbox",
  label: "Diabetico",
  defaultValue: false,
  fields: [
    {
      condition: (isChecked: boolean) => isChecked,
      fieldName: "insuline",
      inputType: "checkbox",
      label: "Usa Insulina",
      defaultValue: false,
    },
  ],
};

const hypertension = {
  fieldName: "hypertension",
  inputType: "checkbox",
  label: "Hipertension",
  defaultValue: false,
};

const SCHEMAS = {
  myocardialInfarction: [hypertension, abcScale, diabetic, comment],
};

export default SCHEMAS;
