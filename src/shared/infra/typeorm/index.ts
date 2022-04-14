import { Connection, createConnection, getConnectionOptions } from "typeorm";

// export default async (host = "database"): Promise<Connection> => { ** RODANDO O APP DENTRO DO DOCKER
export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  return createConnection(
    Object.assign(defaultOptions, {
      //      host: process.env.NODE_ENV === "test" ? "localhost" : host,
      database:
        process.env.NODE_ENV === "test"
          ? "rentx_test"
          : defaultOptions.database,
    })
  );
};
