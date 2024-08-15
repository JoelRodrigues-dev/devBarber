import prismaCliet from "../../prisma";

interface HaircutRequest {
  haircut_id: string;
}

class DetailHaircutsService {
  async execute({ haircut_id }: HaircutRequest) {
    const haircut = await prismaCliet.haircut.findFirst({
      where: {
        id: haircut_id,
      },
    });

    return haircut;
  }
}

export { DetailHaircutsService };
