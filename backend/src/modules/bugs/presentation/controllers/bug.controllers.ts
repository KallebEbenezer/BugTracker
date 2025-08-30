import { CustomError } from "@/Errors/CustomerError";
import * as BugServices from "@/modules/bugs/application/services/implementation/bug.service.implementation";
import * as BugRepository from "@/modules/bugs/infra/bugs.repository.drizzle";
import { FastifyReply, FastifyRequest } from "fastify";
import { BugInputDTO } from "../../application/services/DTO/create.input.dto";

export const create_bug = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const data = req.body as BugInputDTO;

    const response = await BugServices.Create_Bug(BugRepository.CreateBug, data);

    reply.status(200).send({ created_bug: response[0] });
  }
  catch (error) {
    if (error instanceof CustomError) {
      return reply.status(500).send({
        error_message: `Error on register bug: ${error.message}`
      })
    }
    return reply.status(500).send({ error: "internal server error " });
  };
}