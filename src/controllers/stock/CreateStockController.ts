import { Request, Response } from "express";
import { CreateStockService, StockRequest } from "../../services/stock/CreateStockService";

class CreateStockController {
    async handle(req: Request, res: Response) {
        const { entry_date, physical_location, sold_quantity, name } = req.body as StockRequest

        const createStockService = new CreateStockService()

        const stock = await createStockService.execute({ entry_date, physical_location, sold_quantity, name })

        return res.json(stock)
    }
}

export { CreateStockController }

