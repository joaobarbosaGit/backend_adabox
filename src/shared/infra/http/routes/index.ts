import { Router } from 'express';

import { personsRoutes } from './persons.routes';
import { authenticateRoutes } from "./authenticate.routes";
import { enterpriseRoutes } from './enterprise.routes';
import { sales_OrderRoutes } from './sales_order.routes';
import { productsRoutes } from './products.routes';
import { storage_has_EnterpriseRoutes } from './storage.routes';
import { cost_valueRoutes } from './cost_value.routes';
import { categoriesRoutes } from './categories.routes';
import { passwordRoutes } from "./password.routes";

const router = Router();

router.use("/", personsRoutes);
router.use("/", enterpriseRoutes);
router.use("/", sales_OrderRoutes);
router.use("/", productsRoutes);
router.use("/", storage_has_EnterpriseRoutes);
router.use("/", cost_valueRoutes);
router.use("/", categoriesRoutes);
router.use("/password", passwordRoutes);
router.use(personsRoutes);
router.use(authenticateRoutes);

export { router };