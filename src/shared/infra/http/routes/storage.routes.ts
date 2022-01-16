import { Router } from "express";

import { CreateStorage_has_EnterpriseController } from "@modules/storage/useCases/storage_has_enterprise/createStorage_has_Enterprise/CreateStorage_has_EnterpriseController";
import { UpdateStorage_has_EnterpriseController } from "@modules/storage/useCases/storage_has_enterprise/updateStorage_has_Enterprise/UpdateStorage_has_EnterpriseController";
import { DeleteStorage_has_EnterpriseController } from "@modules/storage/useCases/storage_has_enterprise/deleteStorage_has_Enterprise/DeleteStorage_has_EnterpriseController";
import { FindOneStorage_has_EnterpriseController } from "@modules/storage/useCases/storage_has_enterprise/findOneStorage_has_Enterprise/FindOneStorage_has_EnterpriseController";

const storage_has_EnterpriseRoutes = Router();

const createStorage_has_EnterpriseController = new CreateStorage_has_EnterpriseController();
const updateStorage_has_EnterpriseController = new UpdateStorage_has_EnterpriseController();
const deleteStorage_has_EnterpriseController = new DeleteStorage_has_EnterpriseController();
const findOneStorage_has_EnterpriseController = new FindOneStorage_has_EnterpriseController();

storage_has_EnterpriseRoutes.post("/storage_has_enterprise", createStorage_has_EnterpriseController.handle);
storage_has_EnterpriseRoutes.put("/storage_has_enterprise", updateStorage_has_EnterpriseController.handle);
storage_has_EnterpriseRoutes.delete("/storage_has_enterprise/:id", deleteStorage_has_EnterpriseController.handle);
storage_has_EnterpriseRoutes.get("/storage_has_enterprise/:id", findOneStorage_has_EnterpriseController.handle);

export { storage_has_EnterpriseRoutes };