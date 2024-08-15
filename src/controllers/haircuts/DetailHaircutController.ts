import { Request, Response } from "express";
import { DetailHaircutsService } from "../../services/haircuts/DetailHaircutsService";

class DetailHaircutController {
  async handle(req: Request, res: Response) {
    const haircut_id = req.query.haircut_id as string;

    const detailHaircutService = new DetailHaircutsService();

    const haircut = await detailHaircutService.execute({
      haircut_id,
    });

    return res.json(haircut);
  }
}

export { DetailHaircutController };
