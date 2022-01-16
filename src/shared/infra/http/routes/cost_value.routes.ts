import { Router } from "express";

import { CreateCost_ValueController } from "@modules/cost_value/useCases/createCost_Value/CreateCost_ValueController";
import { DeleteCost_ValueController } from "@modules/cost_value/useCases/deleteCost_Value/DeleteCost_ValueController";
import { FindOneCost_ValueController } from "@modules/cost_value/useCases/findOneCost_Value/FindOneCost_ValueController";
import { UpdateCost_ValueController } from "@modules/cost_value/useCases/updateCost_Value/FindOneCost_ValueController";

const cost_valueRoutes = Router();

const createCost_ValueController = new CreateCost_ValueController();
const updateCost_ValueController = new UpdateCost_ValueController();
const deleteCost_ValueController = new DeleteCost_ValueController();
const findOneCost_ValueController = new FindOneCost_ValueController();

cost_valueRoutes.post("/cost_value", createCost_ValueController.handle);
cost_valueRoutes.put("/cost_value", updateCost_ValueController.handle);
cost_valueRoutes.delete("/cost_value/:id", deleteCost_ValueController.handle);
cost_valueRoutes.get("/cost_value/:id", findOneCost_ValueController.handle);

export { cost_valueRoutes };