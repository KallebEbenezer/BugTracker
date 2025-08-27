import { FastifyInstance } from "fastify";
import { BugRoutes } from "./modules/bugs/routes/bugs.routes";

export async function RegisterRoutes(fastify: FastifyInstance) {
  await fastify.register(BugRoutes, { prefix: '/bugs'});
}