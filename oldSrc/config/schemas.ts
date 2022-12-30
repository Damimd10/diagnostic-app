// DATOS FILIATORIOS 

const numHC = {
  fieldName: "numHC",
  inputType: "text",
  label: "Historia Clinica N°",
  defaultValue: "",
};

const surName = {
  fieldName: "surName",
  inputType: "text",
  label: "Apellido",
  defaultValue: "",
};

const firstName = {
  fieldName: "firstName",
  inputType: "text",
  label: "Nombre",
  defaultValue: "",
};

const birthDate = {
  fieldName: "birthDate",
  inputType: "text",
  label: "Fecha de nacimiento",
  defaultValue: "",
};

// ANTECEDENTES

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

const dislipemia = {
  fieldName: "dislipemia",
  inputType: "checkbox",
  label: "Dislipemia",
  defaultValue: false,
};

const tobacco = {
  fieldName: "tobacco",
  inputType: "checkbox",
  label: "Tabaco",
  defaultValue: false,
  fields: [
    {
      condition: (isChecked: boolean) => isChecked,
      fieldName: "actual_tabaquist",
      inputType: "checkbox",
      label: "Sigue fumando",
      defaultValue: true,
    },
	{
      condition: (isChecked: boolean) => isChecked,
      fieldName: "tobacco_load",
      inputType: "numeric",
      label: "Carga tabáquica (pack/year)",
      defaultValue: "",
    },
  ],
};

const antecedente_IAM = {
  fieldName: "antecedente_IAM",
  inputType: "checkbox",
  label: "IAM previo",
  defaultValue: false,
  fields: [
    {
      condition: (isChecked: boolean) => isChecked,
      fieldName: "IAM_last",
      inputType: "text",
      label: "Fecha de último IAM",
      defaultValue: "",
    },
	{
      condition: (isChecked: boolean) => isChecked,
      fieldName: "IAM_description",
      inputType: "textarea",
      label: "Comentarios",
      defaultValue: "",
    },
  ],
};

const antecedente_ATC = {
  fieldName: "antecedente_ATC",
  inputType: "checkbox",
  label: "ATC previa",
  defaultValue: false,
  fields: [
    {
      condition: (isChecked: boolean) => isChecked,
      fieldName: "ATC_last",
      inputType: "text",
      label: "Fecha de última ATC",
      defaultValue: "",
    },
	{
      condition: (isChecked: boolean) => isChecked,
      fieldName: "ATC_description",
      inputType: "textarea",
      label: "Descripción ATC",
      defaultValue: "",
    },
  ],
};

const antecedente_CABG = {
  fieldName: "antecedente_CABG",
  inputType: "checkbox",
  label: "CABG previa",
  defaultValue: false,
  fields: [
    {
      condition: (isChecked: boolean) => isChecked,
      fieldName: "CABG_last",
      inputType: "text",
      label: "Fecha de CRM",
      defaultValue: "",
    },
	{
      condition: (isChecked: boolean) => isChecked,
      fieldName: "CABG_description",
      inputType: "textarea",
      label: "Descripción CRM",
      defaultValue: "",
    },
  ],
};


const cardiacSurgery_antecedente = {
  fieldName: "cardiacSurgery_antecedente",
  inputType: "checkbox",
  label: "Cirugía cardíaca previa",
  defaultValue: false,
  fields: [
    {
      condition: (isChecked: boolean) => isChecked,
      fieldName: "CRM_antecedente",
      inputType: "checkbox",
      label: "CRM",
      defaultValue: false,
    },
	{
      condition: (isChecked: boolean) => isChecked,
      fieldName: "valvular_antecedente",
      inputType: "checkbox",
      label: "Valvular",
      defaultValue: false,
    },
  ],
};


const antecedente_DVT = {
  fieldName: "antecedente_DVT",
  inputType: "checkbox",
  label: "TVP previa",
  defaultValue: false,
};

const antecedente_contraceptive = {
  fieldName: "antecedente_contraceptive",
  inputType: "checkbox",
  label: "Anticonceptivos",
  defaultValue: false,
};

const antecedentesDescription = {
  fieldName: "antecedentesDescription",
  inputType: "textarea",
  label: "Otros antecedentes",
  defaultValue: "",
};

// EXAMEN FISICO:
const bloodPressure = {
  fieldName: "bloodPressure",
  inputType: "text",
  label: "TA",
  defaultValue: "",
  units: "mmHg",

};

const cardiacFrecuency = {
  fieldName: "cardiacFrecuency",
  inputType: "text",
  label: "FC",
  defaultValue: "",
  units: "lpm",

};

const respiratoryFrecuency = {
  fieldName: "respiratoryFrecuency",
  inputType: "text",
  label: "FR",
  defaultValue: "",
  units: "rpm",
};

const temperature = {
  fieldName: "temperature",
  inputType: "text",
  label: "FR",
  defaultValue: "",
  units: "°C",
};

const physicalExamDescription = {
  fieldName: "physicalExamDescription",
  inputType: "textarea",
  label: "Descripción",
  defaultValue: "",
  units: "",
};

// SCORES 

const score_TIMI = {
  fieldName: "score_TIMI",
  inputType: "numeric",
  label: "TIMI",
  defaultValue: "",
};

const score_GRACE = {
  fieldName: "score_GRACE",
  inputType: "numeric",
  label: "GRACE",
  defaultValue: "",
};

const score_CRUSADE = {
  fieldName: "score_CRUSADE",
  inputType: "numeric",
  label: "CRUSADE",
  defaultValue: "",
};

const score_euroII = {
  fieldName: "score_euroII",
  inputType: "numeric",
  label: "EuroScore II",
  defaultValue: "",
};

const score_argenscore = {
  fieldName: "score_argenscore",
  inputType: "numeric",
  label: "ArgenScore",
  defaultValue: "",
};

const score_PESI = {
  fieldName: "score_PESI",
  inputType: "numeric",
  label: "PESI",
  defaultValue: "",
};


const score_PESIs = {
  fieldName: "score_PESIs",
  inputType: "numeric",
  label: "PESI simplificado",
  defaultValue: "",
};


// ESTUDIOS COMPLEMENTARIOS
const ECG = {
  fieldName: "ECG",
  inputType: "textarea",
  label: "ECG",
  defaultValue: "",
};

const laboratorio = {
  fieldName: "laboratorio",
  inputType: "textarea",
  label: "laboratorio",
  defaultValue: "",
};

const echocardiogram = {
  fieldName: "echocardiogram",
  inputType: "textarea",
  label: "Ecocardiograma",
  defaultValue: "",
};

// Tratamiento actual

const treatmentDescription = {
  fieldName: "treatmentDescription",
  inputType: "textarea",
  label: "Medicación actual",
  defaultValue: "",
};



// -------- SCHEMAS  -----------
/* Componentes que tiene cada uno de los diagnosticos */

const SCHEMAS = {
  onPatient: [
    { datos_filiatorios: [numHC, surName, firstName, birthDate] },
    { antecedentes: [hypertension, diabetic, dislipemia, tobacco, antecedentesDescription] },
	{ examen_fisico: [bloodPressure, cardiacFrecuency, respiratoryFrecuency, temperature, physicalExamDescription]}, 
	{ estudios_complementarios: [ECG, laboratorio]},
	{ tratamiento_actual : [treatmentDescription]},
  ],
  myocardialInfarction: [
    { datos_filiatorios: [] },
    { antecedentes: [antecedente_IAM, antecedente_CABG, antecedente_ATC] },
    { scores: [score_TIMI, score_GRACE, score_CRUSADE] },
	{ estudios_complementarios: [echocardiogram]},
  ],
  pulmonaryEmbolism: [
    { datos_filiatorios: [numHC, surName, firstName, birthDate] },
    { antecedentes: [antecedente_DVT, antecedente_contraceptive] },
    { scores: [score_PESI, score_PESIs] },
  ],
};

export default SCHEMAS;
