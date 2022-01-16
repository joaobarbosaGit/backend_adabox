import { Router } from "express";

import { CreateCategoriesController } from "@modules/categories/useCases/Categories/createCategories/CreateCategoriesController";
import { UpdateCategoriesController } from "@modules/categories/useCases/Categories/updateCategories/UpdateCategoriesController";
import { DeleteCategoriesController } from "@modules/categories/useCases/Categories/deleteCategories/DeleteCategoriesController";
import { FindOneCategoriesController } from "@modules/categories/useCases/Categories/findOneCategories/FindOneCategoriesController";
import { FindAllCategoriesController } from "@modules/categories/useCases/Categories/findAllCategories/FindAllCategoriesController";

const categoriesRoutes = Router();

const createCategoriesController = new CreateCategoriesController();
const updateCategoriesController = new UpdateCategoriesController();
const deleteCategoriesController = new DeleteCategoriesController();
const findOneCategoriesController = new FindOneCategoriesController();
const findALLCategoriesController = new FindAllCategoriesController();

categoriesRoutes.post("/categories", createCategoriesController.handle);
categoriesRoutes.put("/categories", updateCategoriesController.handle);
categoriesRoutes.delete("/categories/:id", deleteCategoriesController.handle);
categoriesRoutes.get("/categories/:id", findOneCategoriesController.handle);
categoriesRoutes.get("/categories", findALLCategoriesController.handle);

export { categoriesRoutes };