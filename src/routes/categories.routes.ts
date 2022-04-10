import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/CreateCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategory/ListCategoriesController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';

const categoriesRoutes = Router();

const upload = multer({
    dest:"./tmp"
})

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();


categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle)

export { categoriesRoutes };
//uuid - identificador unico universal
// repositórios - São responsaveis por fazer toda a manipulação 
// de dados da aplicação, acesso a bd, select e etc

