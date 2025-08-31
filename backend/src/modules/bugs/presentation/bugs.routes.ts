import { FastifyInstance } from "fastify";
import { BugBodySchema } from "../domain/entries";
import { create_bug_output_200 } from "../domain/outputs";

import { ZodTypeProvider } from "fastify-type-provider-zod";

import * as BugControllers from "@/modules/bugs/presentation/bug.controllers";

export function BugRoutes(fastifyInstance: FastifyInstance) {
  fastifyInstance.withTypeProvider<ZodTypeProvider>().post(
    '/create',
    {
      schema: {
        body: BugBodySchema,
        response: {
          200: create_bug_output_200
        }
      }
    },
    BugControllers.create_bug
  )
};