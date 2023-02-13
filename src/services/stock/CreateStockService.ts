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

// const test = await prismaClient.stock.findFirst({
//     where: {
//         OR: [
//             { name: "Principal" },
//             { id: "IDA" }
//         ]
//     },
//     select: {
//         id: true,
//         name: true,
//         sold_quantity: true,
//         physical_location: true,
//         categories: {
//             select: {
//                 name: true,
//                 id: true
//             }
//         },
//         suppliers: {
//             select: {
//                 name: true,
//                 id: true
//             }
//         },
//         cashFlows: {
//             select: {
//                 id: true
//             }
//         }
//     }
// })

