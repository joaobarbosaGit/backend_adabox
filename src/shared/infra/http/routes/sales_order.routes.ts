import { Router } from "express"; 

import { CreateSales_OrderController } from "@modules/salesOrder/useCases/Sales_Order/createSales_Order/CreateSales_OrderController";
import { UpdateSales_OrderController } from "@modules/salesOrder/useCases/Sales_Order/updateSales_Order/UpdateSales_OrderController";
import { DeleteSales_OrderController } from "@modules/salesOrder/useCases/Sales_Order/deleteSales_Order/DeleteSales_OrderController";
import { FindOneSales_OrderController } from "@modules/salesOrder/useCases/Sales_Order/findOneSales_Order/FindOneSales_OrderController";
import { FindAllSales_OrderController } from "@modules/salesOrder/useCases/Sales_Order/findAllSales_Order/FindAllSales_OrderController";

import { CreateSales_Order_has_ProductsController } from "@modules/salesOrder/useCases/Sales_Order_has_Products/createSales_Order_has_Products/CreateSales_Order_has_ProductsController";
import { UpdateSales_Order_has_ProductsController } from "@modules/salesOrder/useCases/Sales_Order_has_Products/updateSales_Order_has_Products/UpdateSales_Order_has_ProductsController";
import { DeleteSales_Order_has_ProductsController } from "@modules/salesOrder/useCases/Sales_Order_has_Products/deleteSales_Order_has_Products/DeleteSales_Order_has_ProductsController";
import { FindOneSales_Order_has_ProductsController } from "@modules/salesOrder/useCases/Sales_Order_has_Products/findOneSales_Order_has_Products/FindOneSales_Order_has_ProductsController";

import { CreateTypes_SalesController } from "@modules/salesOrder/useCases/Types_Sales/createTypes_Sales/CreateTypes_SalesController";
import { UpdateTypes_SalesController } from "@modules/salesOrder/useCases/Types_Sales/updateTypes_Sales/UpdateTypes_SalesController";
import { DeleteTypes_SalesController } from "@modules/salesOrder/useCases/Types_Sales/deleteTypes_Sales/DeleteTypes_SalesController";
import { FindOneTypes_SalesController } from "@modules/salesOrder/useCases/Types_Sales/findOneTypes_Sales/FindOneTypes_SalesControllers";
import { FindAllTypes_SalesController } from "@modules/salesOrder/useCases/Types_Sales/findAllTypes_Sales/FindAllTypes_SalesController";

const sales_OrderRoutes = Router();

const createSales_OrderController = new CreateSales_OrderController();
const updateSales_OrderController = new UpdateSales_OrderController();
const deleteSales_OrderController = new DeleteSales_OrderController();
const findOneSales_OrderController = new FindOneSales_OrderController();
const findAllSales_OrderController = new FindAllSales_OrderController();

const createSales_Order_has_ProductsController = new CreateSales_Order_has_ProductsController();
const updateSales_Order_has_ProductsController = new UpdateSales_Order_has_ProductsController();
const deleteSales_Order_has_ProductsController = new DeleteSales_Order_has_ProductsController();
const findOneSales_Order_has_ProductsController = new FindOneSales_Order_has_ProductsController();

const createTypes_SalesController = new CreateTypes_SalesController();
const updateTypes_SalesController = new UpdateTypes_SalesController();
const deleteTypes_SalesController = new DeleteTypes_SalesController();
const findOneTypes_SalesController = new FindOneTypes_SalesController();
const findAllTypes_SalesController = new FindAllTypes_SalesController();

sales_OrderRoutes.post("/sales_order", createSales_OrderController.handle);
sales_OrderRoutes.put("/sales_order", updateSales_OrderController.handle);
sales_OrderRoutes.delete("/sales_order/:id", deleteSales_OrderController.handle);
sales_OrderRoutes.get("/sales_order/:id", findOneSales_OrderController.handle);
sales_OrderRoutes.get("/sales_order/", findAllSales_OrderController.handle);

sales_OrderRoutes.post("/sales_order_has_products", createSales_Order_has_ProductsController.handle);
sales_OrderRoutes.put("/sales_order_has_products", updateSales_Order_has_ProductsController.handle);
sales_OrderRoutes.delete("/sales_order_has_products/:id", deleteSales_Order_has_ProductsController.handle);
sales_OrderRoutes.get("/sales_order_has_products/:id", findOneSales_Order_has_ProductsController.handle);

sales_OrderRoutes.post("/types_sales", createTypes_SalesController.handle);
sales_OrderRoutes.put("/types_sales", updateTypes_SalesController.handle);
sales_OrderRoutes.delete("/types_sales/:id", deleteTypes_SalesController.handle);
sales_OrderRoutes.get("/types_sales/:id", findOneTypes_SalesController.handle);
sales_OrderRoutes.get("/types_sales", findAllTypes_SalesController.handle);

export { sales_OrderRoutes };