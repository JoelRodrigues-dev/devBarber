import prismaCliet from "../../prisma";

interface CountRequest {
  user_id: string;
}

class CountHaircutsService {
  async execute({ user_id }: CountRequest) {
    const count = await prismaCliet.haircut.count({
      where: {
        id: user_id,
      },
    });

    return count;
  }
}

export { CountHaircutsService };
