import prismaClient from "../../prisma";

export interface StockRequest {
    entry_date: string,
    sold_quantity: number,
    physical_location: string,
    name?: string
}

class CreateStockService {
    async execute({ entry_date, physical_location, sold_quantity, name }: StockRequest) {

        const stock = await prismaClient.stock.create({
            data: {
                entry_date,
                physical_location,
                sold_quantity,
                name
            }
        })

        return stock
    }
}

export { CreateStockService }