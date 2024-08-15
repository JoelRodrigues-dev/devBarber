import { Request, Response } from "express";
import { DeleteHaircutService } from "../../services/haircuts/DeleteHaircutService";

class DeleteHaircutController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const user_id = req.user_id;

    const deleteHaircutService = new DeleteHaircutService();

    const result = await deleteHaircutService.execute({
      user_id,
      haircut_id: id,
    });

    return res.json(result);
  }
}

export { DeleteHaircutController };
