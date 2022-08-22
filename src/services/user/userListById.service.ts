import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userListByIdService = async (id: number) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findBy({ id: id });

  return user;
};

export default userListByIdService;
