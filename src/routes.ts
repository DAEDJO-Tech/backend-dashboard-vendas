import { Router } from 'express';
// MIDDLEWARE
import { isAuthenticated } from './middlewares/isAuthenticated';
// USER
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

const router = Router();

// Rotas - User

router.post("/user", new CreateUserController().handle)

router.post("/signin", new AuthUserController().handle)

router.get("/userinfo", isAuthenticated, new DetailUserController().handle)

export { router }; 