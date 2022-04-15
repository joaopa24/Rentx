      // Adicionar coluna avatar na tabela users
      // Refatorar usuario com coluna avatar
      // configuração do multer
      // regra de negocio do upload

import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

      // criar controller
interface IRequest {
    user_id: string;
    avatar_file: string;
}      

@injectable()
class UpdateUserAvatarUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({ user_id, avatar_file}: IRequest): Promise<void> {
       const user = await this.usersRepository.findById(user_id)

       user.avatar = avatar_file
       await this.usersRepository.create(user)
    }
}

export { UpdateUserAvatarUseCase }