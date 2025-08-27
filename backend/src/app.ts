import fastify, { type FastifyInstance } from "fastify";
import fastifyCors from "@fastify/cors";
import zodPlugin from "./plugins/zod.plugin";
import { RegisterRoutes } from "./routes.config";

export default async function buildApp() {
  const app = fastify({ logger: false});
  
  await zodPlugin(app);
  
  await RegisterRoutes(app);
  
  app.register(fastifyCors, { prefix: '*' });

  return app    
}