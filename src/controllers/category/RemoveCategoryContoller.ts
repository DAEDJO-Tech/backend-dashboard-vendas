import { Request, Response } from "express";
import { RemoveCategoryService, RequestRemoveCategory } from "../../services/category/RemoveCategoryService";

class RemoveCategoryContoller {
    async handle(req: Request, res: Response) {
        const { name, id } = req.body as RequestRemoveCategory

        const removeCategoryService = new RemoveCategoryService()

        const category = await removeCategoryService.execute({ id, name })

        return res.json(category)
    }
}

export { RemoveCategoryContoller }