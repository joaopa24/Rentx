import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user:{
        name:string;
        email: string;
    },
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
       @inject("UsersRepository")
       private usersRepository: IUsersRepository
    ){}
    async execute({ email, password}: IRequest){
      // Usuario existe
      const user = await this.usersRepository.findByEmail(email);
      if(!user){
          throw new Error("Email or password incorrect")
      }
      // verificar se senha esta correta
      const passwordMatch = await compare(password, user.password)
      if(!passwordMatch){
          throw new Error("Email or password incorrect")
      }
      // gerar jsonwebtoken - gerador md5 - joaoignitetoken
      const token = sign({}, "e56a5140110e6ed6549ba6ac973a3286",{
          subject: user.id,
          expiresIn: "1d"
      });

      const tokenReturn: IResponse = {
          token,
          user:{
              name: user.name,
              email: user.email
          }
      }

      return tokenReturn
    }
}

export { AuthenticateUserUseCase }