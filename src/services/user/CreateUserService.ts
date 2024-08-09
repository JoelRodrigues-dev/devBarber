import prismaCliet from "../../prisma";
import { hash } from "bcrypt";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!name || !email || !password) {
      throw new Error("All fields are mandatory!");
    }

    const userExists = await prismaCliet.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userExists) {
      throw new Error("User Alredy exists!");
    }

    const passwordHashed = await hash(password, 8);

    const user = await prismaCliet.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHashed,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
