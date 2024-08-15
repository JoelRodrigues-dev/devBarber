import prismaCliet from "../../prisma";

interface CheckRequest {
  user_id: string;
}

class CheckSubscriptionService {
  async execute({ user_id }: CheckRequest) {
    const status = await prismaCliet.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        subscriptions: {
          select: {
            id: true,
            status: true,
          },
        },
      },
    });

    return status;
  }
}

export { CheckSubscriptionService };
