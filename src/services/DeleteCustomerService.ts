import prismaClient from "../prisma";


interface DeleteCustomerProps{
    id: string
}

class DeleteCustomerService{
    async execute({ id }: DeleteCustomerProps){

        if(!id){
          throw new Error("Não foi possível deletar o cliente!")  
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })

        if(!findCustomer){
            throw new Error("Cliente não encontrado!")
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return { message: "Cliente deletado com sucesso!"}

    }
}

export {DeleteCustomerService}