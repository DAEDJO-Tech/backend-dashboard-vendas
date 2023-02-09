import prismaClient from "../../prisma";

export interface StockRequest {
    entry_date: string,
    sold_quantity: number,
    physical_location: string,
}

class CreateStockService {
    async execute({ entry_date, physical_location, sold_quantity }: StockRequest) {

        // const test = await prismaClient.stock.findFirst({
        //     where: {
        //         entry_date: "09/02/2023"
        //     },
        //     select: {
        //         categories: {
        //             select: {
        //                 name: true,
        //                 id: true
        //             }
        //         },
        //         suppliers: true
        //     }
        // })

        const stock = await prismaClient.stock.create({
            data: {
                entry_date,
                physical_location,
                sold_quantity,
            }
        })

        return stock
    }
}

export { CreateStockService }

