import { Router, Request, Response } from "express";
import { CreateUserCotroller } from "./controllers/user/CreateUserCotroller";
import { LoginUserController } from "./controllers/user/LoginUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { isAuthenticated } from "./middlewares/auth/Auth";
import { CreateHaircutController } from "./controllers/haircuts/CreateHairCutController";
import { ListHaircutController } from "./controllers/haircuts/ListHaircutController";
import { UpdateHaircutControlle } from "./controllers/haircuts/UpdateHaircutController";
import { DeleteHaircutController } from "./controllers/haircuts/DeleteHaircutController";
import { CheckSubscriptionController } from "./controllers/haircuts/CheckSubscriptionController";
import { CountHaircutsController } from "./controllers/haircuts/CountHairCutsController";
import { DetailHaircutController } from "./controllers/haircuts/DetailHaircutController";

const router = Router();

// Rotas Usuario

router.get("/user", new DetailUserController().handle);
router.post("/user", new CreateUserCotroller().handle);
router.post("/login", new LoginUserController().handle);
router.put("/user", isAuthenticated, new UpdateUserController().handle);
router.delete("/user", isAuthenticated, new DeleteUserController().handle);

// Rotas Haircuts

router.get("/haircut", isAuthenticated, new ListHaircutController().handle);
router.get(
  "/haircut/check",
  isAuthenticated,
  new CheckSubscriptionController().handle
);
router.get(
  "/haircut/count",
  isAuthenticated,
  new CountHaircutsController().handle
);

router.get(
  "/haircut/detail",
  isAuthenticated,
  new DetailHaircutController().handle
);
router.post("/haircut", isAuthenticated, new CreateHaircutController().handle);
router.put("/haircut", isAuthenticated, new UpdateHaircutControlle().handle);
router.delete(
  "/haircut",
  isAuthenticated,
  new DeleteHaircutController().handle
);

export { router };
