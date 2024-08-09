import prismaCliet from "../../prisma";

class DeleteUserService {
  async execute(user_id: string) {
    const user = await prismaCliet.user.delete({
      where: {
        id: user_id,
      },
    });

    return user;
  }
}

export { DeleteUserService };
