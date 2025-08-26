import GetEnv from "../utils/GetEnv.util.js";
import buildApp from "./app.js";
import fastify from "fastify";

import * as BugService from "@/modules/bugs/services/implementation/bug.service.implementation";
import * as BugRepository from "@/modules/bugs/infra/bugs.repository.drizzle";
import { db } from "./db/connection.js";

const host: string = String(GetEnv('HOST_SERVER'));
const port: number = Number(GetEnv('PORT_SERVER'));

const startServer = async() => {
  const app = await buildApp(fastify());
  const newBug = {
    title: "title",
    status: "conclued ",
    description: "description",
    resolution: "resolution hsfkafhkjfhlsdkjf",
    technology: "drizzle",
    programming_language: "typescript"
  }
  const testdb = await BugService.Create_Bug(BugRepository.CreateBug, newBug);
  try{
    app.listen({host: host, port: port}, err => {
      if(err) throw err
      console.log(testdb);
      console.log(`Server is listening at http://${host}:${port}`);
    })
  }
  catch(err) {
    if(err instanceof Error) console.log(`Error when starting server: ${err}`);
  }
}

startServer();