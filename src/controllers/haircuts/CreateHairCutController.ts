import { Request, Response } from "express";
import { CreateHaircutService } from "../../services/haircuts/CreateHairCutServie";

class CreateHaircutController {
  async handle(req: Request, res: Response) {
    const { name, price } = req.body;

    const user_id = req.user_id;

    const createHaircutService = new CreateHaircutService();

    const hairCut = createHaircutService.execute({
      user_id,
      name,
      price,
    });

    return res.json(hairCut);
  }
}

export { CreateHaircutController };
