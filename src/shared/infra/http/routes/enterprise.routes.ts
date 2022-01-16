import { Router } from "express"; 

import { CreateEnterpriseController } from "@modules/entrerprise/useCases/Enterprise/createEnterprise/CreateEnterpriseController";
import { UpdateEnterpriseController } from "@modules/entrerprise/useCases/Enterprise/updateEnterprise/UpdateEnterpriseController";
import { DeleteEnterpriseController } from "@modules/entrerprise/useCases/Enterprise/deleteEnterprise/DeleteEnterpriseController";
import { FindOneEnterpriseController } from "@modules/entrerprise/useCases/Enterprise/findOneEnterprise/FindOneEnterpriseController";

const enterpriseRoutes = Router();

const createEnterpriseController = new CreateEnterpriseController();
const updateEnterpriseController = new UpdateEnterpriseController();
const deleteEnterpriseController = new DeleteEnterpriseController();
const findOneEnterpriseController = new FindOneEnterpriseController();

enterpriseRoutes.post("/enterprise", createEnterpriseController.handle);
enterpriseRoutes.put("/enterprise", updateEnterpriseController.handle);
enterpriseRoutes.delete("/enterprise/:id", deleteEnterpriseController.handle);
enterpriseRoutes.get("/enterprise/:id", findOneEnterpriseController.handle);

export { enterpriseRoutes };