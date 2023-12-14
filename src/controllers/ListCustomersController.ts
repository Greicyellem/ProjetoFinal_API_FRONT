import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/ListCustomerService";

class ListCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomersService = new ListCustomersService();

        const customers = await listCustomersService.execute();


        reply.send(customers);
    }

}

export {ListCustomersController}