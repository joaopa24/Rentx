import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub:string
}

export async function ensureAuthenticated(request: Request, 
    response: Response, 
    next: NextFunction) {
    //Bear dsoadmsadm12m12m1o31mzz2#@!!@
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split("")
    
    try {
        const { sub: user_id } = verify(token, "e56a5140110e6ed6549ba6ac973a3286") as IPayload
        
        const userRepository = new UsersRepository();
        const user = await userRepository.findById(user_id)

        if(!user){
            throw new AppError("User does not exists!", 401)
        }

        request.user = {
            id: user_id
        }

        next();
    } catch (error) {
        throw new AppError("Invalid Token", 401)
    }
    
}