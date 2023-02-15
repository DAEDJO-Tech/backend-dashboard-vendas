import { Request, Response } from "express";
import { RemoveCategoryService, RequestRemoveCategory } from "../../services/category/RemoveCategoryService";

class RemoveCategoryContoller {
    async handle(req: Request, res: Response) {
        const { name } = req.body
        const stock_id = req.headers.stock_id as string

        const removeCategoryService = new RemoveCategoryService()

        const category = await removeCategoryService.execute({ name, stock_id })

        return res.json(category)
    }
}

export { RemoveCategoryContoller }