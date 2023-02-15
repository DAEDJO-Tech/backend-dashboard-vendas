import prismaClient from "../../prisma";

export interface RequestRemoveCategory {
    name: string,
    stock_id: string,
}

class RemoveCategoryService {
    async execute({ name, stock_id }: RequestRemoveCategory) {

        if (!name) {
            throw new Error("Fill in the data!")
        }

        const lowerName = name.toLowerCase()

        const CategoryExisted = await prismaClient.category.findFirst({
            where: {
                AND: [
                    { name: lowerName },
                    { stock_id }
                ]
            }
        })

        if (!CategoryExisted) {
            throw new Error("Category not created!")
        }

        const category = await prismaClient.category.update({
            where: {
                id: CategoryExisted.id,
            },
            data: {
                status: false
            }
        })

        return category
        
    }
}

export { RemoveCategoryService }