import { Router, Request, Response } from "express";
import { CreateUserCotroller } from "./controllers/user/CreateUserCotroller";
import { LoginUserController } from "./controllers/user/LoginUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";

const router = Router();

// Rotas Usuario

router.get("/user", new DetailUserController().handle);
router.post("/user", new CreateUserCotroller().handle);
router.post("/login", new LoginUserController().handle);
router.put("/user", new UpdateUserController().handle);
router.delete("/user", new DeleteUserController().handle);

export { router };
