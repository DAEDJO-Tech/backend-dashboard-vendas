import { Router } from 'express';
// MIDDLEWARE
import { isAuthenticated } from './middlewares/isAuthenticated';
// USER
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateStockController } from './controllers/stock/CreateStockController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';

const router = Router();

// Rotas - User

router.post("/user", new CreateUserController().handle)

router.post("/signin", new AuthUserController().handle)

router.get("/userinfo", isAuthenticated, new DetailUserController().handle)

// Rotas - Stock

router.post("/stock", isAuthenticated, new CreateStockController().handle)

// Rotas - Category

router.post("/category", isAuthenticated, new CreateCategoryController().handle)

export { router }; 