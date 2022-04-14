import { hash } from "bcrypt";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { app } from "@shared/infra/http/app";
import createConnection from "@shared/infra/typeorm";

let connection: Connection;

describe("Create Category Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();

    await connection.runMigrations();

    const id = uuidV4();
    const password = await hash("admin132", 8);

    await connection.query(`INSERT INTO 
        USERS(id, name, email, password, "isAdmin", created_at, driver_license) 
        VALUES('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXX1234')`);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("should be able to create a category", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@rentx.com.br",
      password: "admin132",
    });

    const { refresh_token } = responseToken.body;
    const response = await request(app)
      .post("/categories")
      .send({
        name: "Category Supertest",
        description: "Category Supertest",
      })
      .set({ Authorization: `Bearer ${refresh_token}` });

    expect(response.status).toBe(201);
  });

  it("should be able to create a category with same exists", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@rentx.com.br",
      password: "admin132",
    });

    const { refresh_token } = responseToken.body;
    const response = await request(app)
      .post("/categories")
      .send({
        name: "Category Supertest",
        description: "Category Supertest",
      })
      .set({ Authorization: `Bearer ${refresh_token}` });

    expect(response.status).toBe(400);
  });
});
