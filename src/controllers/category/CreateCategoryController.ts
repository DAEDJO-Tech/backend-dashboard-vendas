import { Request, Response } from "express";
import { RequestCreateCategory, CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { name, stock_id } = req.body as RequestCreateCategory

        const createCategoryService = new CreateCategoryService()

        const category = await createCategoryService.execute({ name, stock_id })

        return res.json(category)
    }
}

export { CreateCategoryController }