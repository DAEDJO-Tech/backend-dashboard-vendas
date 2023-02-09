import prismaClient from "../../prisma"

export interface CategoryRequest {
    name: string,
    stock_id: string
}

class CreateCategoryService {
    async execute({ name, stock_id }: CategoryRequest) {

        const category = await prismaClient.category.create({
            data: {
                name: name,
                stock_id: stock_id
            }
        })

        return category
    }
}

export { CreateCategoryService }

