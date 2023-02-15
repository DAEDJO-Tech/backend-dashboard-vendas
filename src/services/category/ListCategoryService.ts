import prismaClient from "../../prisma";

class ListCategoryService {
    async executeName(name: string, stock_id: string) {

        if (!name) {
            throw new Error("Fill in the data!")
        }

        const category = await prismaClient.category.findFirst({
            where: {
                name: name,
                stock_id,
            }
        })

        return category
    }
    async executeId(id: string) {

        if (!id) {
            throw new Error("Fill in the data!")
        }

        const category = await prismaClient.category.findUnique({
            where: {
                id: id,
            }
        })

        return category
    }
    async executeStock(stock_id: string) {

        if (!stock_id) {
            throw new Error("Fill in the data!")
        }

        const category = await prismaClient.category.findMany({
            where: {
                stock_id: stock_id,
            },
        });

        return category
    }
    async executeStatus(status: boolean, stock_id: string) {

        const categories = await prismaClient.category.findMany({
            where: {
                AND: [
                    { status: status },
                    { stock_id: stock_id },
                ],
            },
        });

        return categories
    }
}

export { ListCategoryService }