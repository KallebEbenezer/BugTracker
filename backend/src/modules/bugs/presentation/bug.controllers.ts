import { CustomError } from "@/Errors/CustomerError";
import { bugUseCases } from "../application/use-cases/bugs_use_cases";
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateBugInput } from "../domain/entries";

export const create_bug = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const data = req.body as CreateBugInput;
  
    const response = await  bugUseCases.create(data);

    reply.status(200).send({ created_bug: response });
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