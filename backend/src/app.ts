import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import zodPlugin from "./plugins/zod.plugin";
import { RegisterRoutes } from "./routes.config";
import swaggerPlugin from "./plugins/swagger.plugin";

export default async function buildApp() {
  const app = fastify({ logger: false});
  
  await zodPlugin(app);
  
  await swaggerPlugin(app);

  await RegisterRoutes(app);

  await app.register(fastifyCors, { prefix: '*' });

  return app    
}