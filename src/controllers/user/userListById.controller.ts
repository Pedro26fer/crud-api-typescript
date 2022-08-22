import userListByIdService from "../../services/user/userListById.service";
import { Request, Response } from "express";

const userListByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const idNumber = Number(id);

  const user = await userListByIdService(idNumber);

  if (user.length === 0) {
    return res.status(404).json("Not found");
  }

  return res.status(200).json(user[0]);
};

export default userListByIdController;
