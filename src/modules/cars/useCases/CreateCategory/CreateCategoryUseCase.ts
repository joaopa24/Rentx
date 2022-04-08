import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/* 
 Definir o tipo de retorno
 Alterar o retorno de erro
 Acessar o repositorio
 Retornar algo
*/

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){

    }
    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
           throw new Error("Category already exists!")
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
