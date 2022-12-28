import { useQuery } from "react-query";
import { findAllPatients } from "../services";
import { GetPatients } from "../types";

export default function usePatients() {
  const query = useQuery<GetPatients, Error>(["patients"], findAllPatients);

  return query;
}
