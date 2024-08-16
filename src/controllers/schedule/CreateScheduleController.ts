import { Request, Response } from "express";
import { CreateScheduleService } from "../../services/schedule/CreateScheduleService";

class CreateScheduleController {
  async handle(req: Request, res: Response) {
    const { haircut_id, customer } = req.body;
    const user_id = req.user_id;

    const createScheduleService = new CreateScheduleService();

    const schedule = await createScheduleService.execute({
      user_id,
      haircut_id,
      customer,
    });

    return res.json(schedule);
  }
}

export { CreateScheduleController };
