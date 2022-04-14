import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/createSpecificationController";
import { ListSpecificationsController } from "@modules/cars/useCases/listSpecification/ListSpecificationsController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

import { ensureAdmin } from "../middlewares/ensureAdmin";

const specificationsRoutes = Router();

const listSpecificationsController = new ListSpecificationsController();
const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post(
  "/",
  ensureAdmin,
  createSpecificationController.handle
);

specificationsRoutes.get("/", ensureAdmin, listSpecificationsController.handle);

export { specificationsRoutes };
