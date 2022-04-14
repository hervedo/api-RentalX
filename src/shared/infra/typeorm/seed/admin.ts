import { hash } from "bcrypt";
import { Connection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin132", 8);

  await connection.query(
    `INSERT INTO 
        USERS(id, name, email, password, "isAdmin", created_at, driver_license) 
        VALUES('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXX1234')`
  );

  await connection.close;
}

create().then(() => console.log("User admin created!"));
