import prismaCliet from "../../prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface UserRequest {
  email: string;
  password: string;
}

class LoginUserService {
  async execute({ email, password }: UserRequest) {
    if (!email || !password) {
      throw new Error("All fields are mandatory!");
    }

    const user = await prismaCliet.user.findFirst({
      where: {
        email: email,
      },
      include: {
        subscriptions: true,
      },
    });

    if (!user) {
      throw new Error("User/password incorrect!");
    }

    const passwordCompare = await compare(password, user.password);

    if (!passwordCompare) {
      throw new Error("User/password incorrect!");
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_PASS,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return { id: user.id, name: user.name, email: user.email, token: token };
  }
}

export { LoginUserService };
