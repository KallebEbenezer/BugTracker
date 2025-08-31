import { fastifySwagger } from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { FastifyInstance } from "fastify";
import { jsonSchemaTransform } from "fastify-type-provider-zod";


export default async function swaggerPlugin(app: FastifyInstance) {
  await app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "bug-tracker-api",
        version: "1.0.0"
      },
    },
    transform: jsonSchemaTransform
  });

  await app.register(fastifySwaggerUi, {
    routePrefix: "/docs-api"
  })
}
