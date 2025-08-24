import fastify, { type FastifyInstance } from "fastify";
import fastifyCors from "@fastify/cors";

export default async function buildApp(instance: FastifyInstance) {
  const app = fastify({ logger: false});

  app.register(fastifyCors, { prefix: '*' });

  return app    
}