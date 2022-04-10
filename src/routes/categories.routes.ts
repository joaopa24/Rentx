import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/CreateCategory/CreateCategoryController';
import { listCategoriesController } from '../modules/cars/useCases/listCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const categoriesRoutes = Router();

const upload = multer({
    dest:"./tmp"
})

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request,response)
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request,response)
})

export { categoriesRoutes };
//uuid - identificador unico universal
// repositórios - São responsaveis por fazer toda a manipulação 
// de dados da aplicação, acesso a bd, select e etc

