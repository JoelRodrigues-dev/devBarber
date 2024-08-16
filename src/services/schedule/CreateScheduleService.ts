import prismaCliet from "../../prisma";

interface ScheduleRequest {
  user_id: string;
  haircut_id: string;
  customer: string;
}

class CreateScheduleService {
  async execute({ user_id, haircut_id, customer }: ScheduleRequest) {
    if (haircut_id === "" || customer === "") {
      throw new Error("Error schedule new service");
    }

    const schedule = await prismaCliet.service.create({
      data: {
        customer,
        haircut_id,
        user_id,
      },
    });

    return schedule;
  }
}

export { CreateScheduleService };
