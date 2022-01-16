import { Router } from "express";

import { CreateProductsController } from "@modules/products/useCases/Products/creareProdutcs/CreateProdutcsController";
import { UpdateProductsController } from "@modules/products/useCases/Products/updateProdutcs/UpdateProdutcsController";
import { DeleteProductsController } from "@modules/products/useCases/Products/deleteProdutcs/DeleteProdutcsController";
import { FindAllProductsController } from "@modules/products/useCases/Products/findAllProdutcs/FindAllProdutcsController";
import { FindOneProductsController } from "@modules/products/useCases/Products/findOneProdutcs/FindOneProdutcsController";

import { CreateProducts_has_StorageController } from "@modules/products/useCases/Products_has_Storage/createProducts_has_Storage/CreateProducts_has_StorageController";
import { UpdateProducts_has_StorageController } from "@modules/products/useCases/Products_has_Storage/updateProducts_has_Storage/UpdateProducts_has_StorageController";
import { DeleteProducts_has_StorageController } from "@modules/products/useCases/Products_has_Storage/deleteProducts_has_Storage/DeleteProducts_has_StorageController";
import { FindOneProducts_has_StorageController } from "@modules/products/useCases/Products_has_Storage/findOneProducts_has_Storage/FindOneProducts_has_StorageController";

import { CreateProducts_has_Cost_ValueController } from "@modules/products/useCases/Products_has_Cost_Value/createProducts_has_Cost_Value/CreateProducts_has_Cost_ValueController";
import { UpdateProducts_has_Cost_ValueController } from "@modules/products/useCases/Products_has_Cost_Value/updateProducts_has_Cost_Value/UpdateProducts_has_Cost_ValueController";
import { DeleteProducts_has_Cost_ValueController } from "@modules/products/useCases/Products_has_Cost_Value/deleteProducts_has_Cost_Value/DeleteProducts_has_Cost_ValueController";
import { FindOneProducts_has_Cost_ValueController } from "@modules/products/useCases/Products_has_Cost_Value/findOneProducts_has_Cost_Value/FindOneProducts_has_Cost_ValueController";

import { CreateProducts_AtributesController } from "@modules/products/useCases/Products_Atributes/createProducts_Atributes/CreateProducts_AtributesController";
import { UpdateProducts_AtributesController } from "@modules/products/useCases/Products_Atributes/updateProducts_Atributes/UpdateProducts_AtributesController";
import { DeleteProducts_AtributesController } from "@modules/products/useCases/Products_Atributes/deleteProducts_Atributes/DeleteProducts_AtributesController";
import { FindOneProducts_AtributesController } from "@modules/products/useCases/Products_Atributes/findOneProducts_Atributes/FIndOneProducts_AtributesController";

import { CreateProducts_has_Products_AtributesController } from "@modules/products/useCases/Products_has_Products_Atributes/createProducts_has_Products_Atributes/CreateProducts_has_Products_AtributesController";
import { UpdateProducts_has_Products_AtributesController } from "@modules/products/useCases/Products_has_Products_Atributes/updateProducts_has_Products_Atributes/UpdateProducts_has_Products_AtributesController";
import { DeleteProducts_has_Products_AtributesController } from "@modules/products/useCases/Products_has_Products_Atributes/deleteProducts_has_Products_Atributes/DeleteProducts_has_Products_AtributesController";
import { FindOneProducts_has_Products_AtributesController } from "@modules/products/useCases/Products_has_Products_Atributes/findOneProducts_has_Products_Atributes/FindOneProducts_has_Products_AtributesController";

import { CreateProducts_has_CategoriesController } from "@modules/products/useCases/Products_has_Categories/createProducts_has_Categories/CreateProducts_has_CategoriesController";
import { UpdateProducts_has_CategoriesController } from "@modules/products/useCases/Products_has_Categories/uploadProducts_has_Categories/UploadProducts_has_CategoriesController";
import { DeleteProducts_has_CategoriesController } from "@modules/products/useCases/Products_has_Categories/deleteProducts_has_Categories/DeleteProducts_has_CategoriesController";
import { FindOneProducts_has_CategoriesController } from "@modules/products/useCases/Products_has_Categories/findOneProducts_has_Categories/FindOneProducts_has_CategoriesController";

const productsRoutes = Router();

const createProductsController = new CreateProductsController();
const updateProductsController = new UpdateProductsController();
const deleteProductsController = new DeleteProductsController();
const findAllProductsController = new FindAllProductsController();
const findOneProductsController = new FindOneProductsController();

const createProducts_has_StorageController = new CreateProducts_has_StorageController();
const updateProducts_has_StorageController = new UpdateProducts_has_StorageController();
const deleteProducts_has_StorageController = new DeleteProducts_has_StorageController();
const findOneProducts_has_StorageController = new FindOneProducts_has_StorageController();

const createProducts_has_Cost_ValueController = new CreateProducts_has_Cost_ValueController();
const updateProducts_has_Cost_ValueController = new UpdateProducts_has_Cost_ValueController();
const deleteProducts_has_Cost_ValueController = new DeleteProducts_has_Cost_ValueController();
const findOneProducts_has_Cost_ValueController = new FindOneProducts_has_Cost_ValueController();

const createProducts_AtributesController = new CreateProducts_AtributesController();
const updateProducts_AtributesController = new UpdateProducts_AtributesController();
const deleteProducts_AtributesController = new DeleteProducts_AtributesController();
const findOneProducts_AtributesController = new FindOneProducts_AtributesController();

const createProducts_has_Products_AtributesController = new CreateProducts_has_Products_AtributesController();
const updateProducts_has_Products_AtributesController = new UpdateProducts_has_Products_AtributesController();
const deleteProducts_has_Products_AtributesController = new DeleteProducts_has_Products_AtributesController();
const findOneProducts_has_Products_AtributesController = new FindOneProducts_has_Products_AtributesController();

const createProducts_has_CategoriesController = new CreateProducts_has_CategoriesController();
const updateProducts_has_CategoriesController = new UpdateProducts_has_CategoriesController();
const deleteProducts_has_CategoriesController = new DeleteProducts_has_CategoriesController();
const findOneProducts_has_CategoriesController = new FindOneProducts_has_CategoriesController();

productsRoutes.post("/products", createProductsController.handle);
productsRoutes.put("/products", updateProductsController.handle);
productsRoutes.delete("/products/:id", deleteProductsController.handle);
productsRoutes.get("/products", findAllProductsController.handle);
productsRoutes.get("/products/:id", findOneProductsController.handle);

productsRoutes.post("/products_has_storage", createProducts_has_StorageController.handle);
productsRoutes.put("/products_has_storage", updateProducts_has_StorageController.handle);
productsRoutes.delete("/products_has_storage/:id", deleteProducts_has_StorageController.handle);
productsRoutes.get("/products_has_storage/:id", findOneProducts_has_StorageController.handle);

productsRoutes.post("/products_has_cost_value", createProducts_has_Cost_ValueController.handle);
productsRoutes.put("/products_has_cost_value", updateProducts_has_Cost_ValueController.handle);
productsRoutes.delete("/products_has_cost_value/:id", deleteProducts_has_Cost_ValueController.handle);
productsRoutes.get("/products_has_cost_value/:id", findOneProducts_has_Cost_ValueController.handle);

productsRoutes.post("/products_atributes", createProducts_AtributesController.handle);
productsRoutes.put("/products_atributes", updateProducts_AtributesController.handle);
productsRoutes.delete("/products_atributes/:id", deleteProducts_AtributesController.handle);
productsRoutes.get("/products_atributes/:id", findOneProducts_AtributesController.handle);

productsRoutes.post("/products_has_products_atributes", createProducts_has_Products_AtributesController.handle);
productsRoutes.put("/products_has_products_atributes", updateProducts_has_Products_AtributesController.handle);
productsRoutes.delete("/products_has_products_atributes/:id", deleteProducts_has_Products_AtributesController.handle);
productsRoutes.get("/products_has_products_atributes/:id", findOneProducts_has_Products_AtributesController.handle);

productsRoutes.post("/products_has_categories", createProducts_has_CategoriesController.handle);
productsRoutes.put("/products_has_categories", updateProducts_has_CategoriesController.handle);
productsRoutes.delete("/products_has_categories/:id", deleteProducts_has_CategoriesController.handle);
productsRoutes.get("/products_has_categories/:id", findOneProducts_has_CategoriesController.handle);

export { productsRoutes };