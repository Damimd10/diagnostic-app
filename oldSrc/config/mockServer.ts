import { createServer, Factory, Model } from "miragejs";
import { patients } from "../mocks/patients";

interface Patient {}

export function mockServer({ environment = "development" }) {
  return createServer({
    environment,
    models: {
      patient: Model.extend<Partial<Patient>>({}),
    },
    factories: {
      patient: Factory.extend<Partial<Patient>>({}),
    },
    seeds(server) {
      server.db.loadData({ patients });
    },
    routes() {
      this.urlPrefix = "http://localhost:5173/api";

      this.get(
        "/patients",
        (schema, request) => {
          return schema.all("patient");
        },
        { timing: 2000 },
      );
    },
  });
}
