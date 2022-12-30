import api from "./api";

import { GetPatients } from "../types";

const findAllPatients = async () => {
  const response = await api.get<GetPatients>("/patients");
  return response.data;
};

export default findAllPatients;
