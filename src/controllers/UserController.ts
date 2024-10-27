import { Request, Response } from "express";
import User from "../model/UserModel";
import WebToken from "../middlewares/jwt-token";

export const create = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  const data = {
    name,
    email,
  };
  try {
    const user = await User.create(data);
    const token = WebToken.signToken(user);
    res
      .status(201)
      .json({
        message: "Usuário criado com sucesso!",
        data: user,
        token: token,
      });
  } catch (err: any) {
    res.status(500).json({ message: "Erro ao criar o usuário." });
  }
};
