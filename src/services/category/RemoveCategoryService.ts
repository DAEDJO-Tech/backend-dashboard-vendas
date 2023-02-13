import prismaClient from "../../prisma";

export interface RequestRemoveCategory {
    id: string,
    name: string,
}

class RemoveCategoryService {
    async execute({ id, name }: RequestRemoveCategory) {

        if (!id && !name) {
            throw new Error("Preencha os campos!")
        }

        if (name) {
            var lowerName = name.toLowerCase()
        }

        const CategoryExisted = await prismaClient.category.findFirst({
            where: {
                OR: [
                    { name: lowerName },
                    { id }
                ]
            }
        })

        if (lowerName === CategoryExisted.name || id === CategoryExisted.id) {
            console.log("TAMO TCHUGUERA");

        }

        if (CategoryExisted) {
            const category = await prismaClient.category.update({
                where: {
                    id: CategoryExisted.id
                },
                data: {
                    status: false
                }
            })

            return category
        }
    }
}

export { RemoveCategoryService }