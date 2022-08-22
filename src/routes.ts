import { Router } from "express";
import userCreateController from "./controllers/user/userCreate.controller";
import userDeletedByIdController from "./controllers/user/userDeletedById.controller";
import userListController from "./controllers/user/userList.controller";
import userListByIdController from "./controllers/user/userListById.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", userListController);
routes.get("/users/:id", userListByIdController);
routes.delete("/users/:id", userDeletedByIdController)

export default routes;
