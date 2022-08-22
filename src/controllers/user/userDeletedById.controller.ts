import userDeletedByIdService from "../../services/user/userDeletedById.service";
import { Request, Response } from "express";


const userDeletedByIdController = async (req: Request, res: Response) => {

        const {id} = req.params
        const idNumber = Number(id)

        const deletedUser = await userDeletedByIdService(idNumber)

        if(deletedUser.affected === 0){
            return res.status(404).json({message: 'User not found'})
        }

        return res.status(200).json(deletedUser[0])
}

export default userDeletedByIdController