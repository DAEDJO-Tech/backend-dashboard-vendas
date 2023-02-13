import { Router } from 'express';
// MIDDLEWARE
import { isAuthenticated } from './middlewares/isAuthenticated';
// USER
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
// STOCK
import { CreateStockController } from './controllers/stock/CreateStockController';
// CATEGORY
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { RemoveCategoryContoller } from './controllers/category/RemoveCategoryContoller';

const router = Router();

// Rotas - User

router.post("/user", new CreateUserController().handle)

router.post("/signin", new AuthUserController().handle)

router.get("/userinfo", isAuthenticated, new DetailUserController().handle)

// Rotas - Stock

router.post("/stock", isAuthenticated, new CreateStockController().handle)

// Rotas - Category

router.post("/category", isAuthenticated, new CreateCategoryController().handle)

router.put("/category/remove", isAuthenticated, new RemoveCategoryContoller().handle)

router.get("/categoryByName", isAuthenticated, new ListCategoryController().handleName)

router.get("/categoryById", isAuthenticated, new ListCategoryController().handleId)

router.get("/categoryByStock", isAuthenticated, new ListCategoryController().handleStock)

router.get("/categoryByStatus", isAuthenticated, new ListCategoryController().handleStatus)

export { router }; 