import prismaCliet from "../../prisma";

interface ScheduleRequest {
  schedule_id: string;
  user_id: string;
}

class FinishScheduleService {
  async execute({ schedule_id, user_id }: ScheduleRequest) {
    if (schedule_id === "" || user_id === "") {
      throw new Error("Error");
    }

    try {
      const belongsToUser = await prismaCliet.service.findFirst({
        where: {
          id: schedule_id,
          user_id: user_id,
        },
      });

      if (!belongsToUser) {
        throw new Error("Not Authorized!");
      }

      await prismaCliet.service.delete({
        where: {
          id: schedule_id,
        },
      });

      return { message: "Finalized sucessfully" };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}

export { FinishScheduleService };
