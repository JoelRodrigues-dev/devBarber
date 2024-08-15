import prismaCliet from "../../prisma";

interface HaircutRequest {
  user_id: string;
  haircut_id: string;
}

class DeleteHaircutService {
  async execute({ user_id, haircut_id }: HaircutRequest) {
    const haircut = await prismaCliet.haircut.findFirst({
      where: {
        id: haircut_id,
        user_id: user_id,
      },
    });

    if (!haircut) {
      throw new Error(
        "Haircut not found or you do not have permission to delete"
      );
    }

    await prismaCliet.haircut.delete({
      where: {
        id: haircut_id,
      },
    });

    return { message: "Haircut deleted sucessfully" };
  }
}

export { DeleteHaircutService };
