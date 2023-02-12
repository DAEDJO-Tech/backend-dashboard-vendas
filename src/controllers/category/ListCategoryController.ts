import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
    async handleName(req: Request, res: Response) {
        const name = req.query.name as string
        const stock_id = req.headers.stock_id as string

        const listCategoryService = new ListCategoryService()

        const category = await listCategoryService.executeName(name, stock_id)

        return res.json(category)
    }
    async handleId(req: Request, res: Response) {
        const id = req.query.id as string

        const listCategoryService = new ListCategoryService()

        const category = await listCategoryService.executeId(id)

        return res.json(category)
    }
    async handleStock(req: Request, res: Response) {
        const stock_id = req.query.stock_id as string

        const listCategoryService = new ListCategoryService()

        const category = await listCategoryService.executeStock(stock_id)

        return res.json(category)
    }
    async handleStatus(req: Request, res: Response) {
        const status = req.query.status === 'true' ? true : false;
        const stock_id = req.headers.stock_id as string

        const listCategoryService = new ListCategoryService()

        const category = await listCategoryService.executeStatus(status, stock_id)

        return res.json(category)
    }
}

export { ListCategoryController }