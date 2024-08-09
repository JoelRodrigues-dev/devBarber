import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const id = req.params.user_id;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute(id, {
      name,
      email,
      password,
    });

    return res.json(user);
  }
}

export { UpdateUserController };
