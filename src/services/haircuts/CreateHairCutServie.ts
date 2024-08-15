import prismaCliet from "../../prisma";

interface HaircutRequest {
  user_id: string;
  name: string;
  price: number;
}

class CreateHaircutService {
  async execute({ user_id, name, price }: HaircutRequest) {
    if (!name || !price) {
      throw new Error("All fields are mandatory!");
    }

    const myHairCuts = await prismaCliet.haircut.count({
      where: {
        user_id: user_id,
      },
    });

    const user = await prismaCliet.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscriptions: true,
      },
    });

    if (myHairCuts >= 3 && user?.subscriptions?.status !== "active") {
      throw new Error("Not authorized!");
    }

    const hairCut = await prismaCliet.haircut.create({
      data: {
        name: name,
        price: price,
        user_id: user_id,
      },
    });

    return hairCut;
  }
}

export { CreateHaircutService };
