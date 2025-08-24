import GetEnv from "../utils/GetEnv.util.js";
import buildApp from "./app.js";
import fastify from "fastify";

const host: string = String(GetEnv('HOST_SERVER'));
const port: number = Number(GetEnv('PORT_SERVER'));

const startServer = async() => {
  const app = await buildApp(fastify());

  try{
    app.listen({host: host, port: port}, err => {
      if(err) throw err
      
      console.log(`Server is listening at http://${host}:${port}`);
    })
  }
  catch(err) {
    if(err instanceof Error) console.log(`Error when starting server: ${err}`);
  }
}

startServer();