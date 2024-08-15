import { Request, Response } from "express";
import { ListHaircutService } from "../../services/haircuts/ListHaircutsServices";

class ListHaircutController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const status = req.params.status as string;

    const listHaircutService = new ListHaircutService();

    const haircuts = await listHaircutService.execute({
      user_id,
      status,
    });

    return res.json(haircuts);
  }
}

export { ListHaircutController };
