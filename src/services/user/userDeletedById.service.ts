import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userDeletedByIdService = async (id: number) => {
    const userRepository = AppDataSource.getRepository(User)

    const userDeleted = await userRepository.delete(id)

    return userDeleted
}

export default userDeletedByIdService