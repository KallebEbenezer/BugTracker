import { CustomError } from "@/Errors/CustomerError";
import * as BugRepository from "@/modules/bugs/infra/bugs.repository.drizzle";
import * as BugServices from "@/modules/bugs/services/implementation/bug.service.implementation";
import { FastifyReply, FastifyRequest } from "fastify";
import { BugInputDTO } from "../services/DTO/create.input.dto";

export const create_bug = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const data = req.body as BugInputDTO;
    console.log(data) //depure only
    const response = await BugServices.Create_Bug(BugRepository.CreateBug, data);

    reply.status(200).send({ created_bug: response[0] });
  }
  catch (error) {
    if (error instanceof CustomError) {
      console.log(error) // depure only;
      return reply.status(500).send({
        error_message: `Error on register bug: ${error.message}`
      })
    }
    return reply.status(500).send({ error: "internal server error "});
  }
}