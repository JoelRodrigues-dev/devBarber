import prismaCliet from "../../prisma";

interface UserRequest {
  name?: string;
  email?: string;
  password?: string;
}

class UpdateUserService {
  async execute(user_id: string, { name, email, password }: UserRequest) {
    if (!name && !email && !password) {
      throw new Error("Some fields need to be updated!");
    }

    const user = await prismaCliet.user.update({
      where: {
        id: user_id,
      },
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }
}

export { UpdateUserService };
