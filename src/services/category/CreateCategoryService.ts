import prismaClient from "../../prisma"

export interface RequestCreateCategory {
    name: string,
    stock_id: string
}

class CreateCategoryService {
    async execute({ name, stock_id }: RequestCreateCategory) {

        if (!name || !stock_id) {
            throw new Error("Fill in the data!")
        }

        const lowerName = name.toLowerCase()

        const CategoryAlreadyCreated = await prismaClient.category.findFirst({
            where: {
                AND: [
                    { name: lowerName },
                    { stock_id },
                ],
            }
        });

        if (CategoryAlreadyCreated) {
            throw new Error("Category already created!")
        }

        const category = await prismaClient.category.create({
            data: {
                name: lowerName,
                stock_id: stock_id
            }
        })

        return category
    }
}

export { CreateCategoryService }

