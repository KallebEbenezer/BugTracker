import GetEnv from "../utils/GetEnv.util.js";
import buildApp from "./app.js";

const host: string = String(GetEnv('HOST_SERVER'));
const port: number = Number(GetEnv('PORT_SERVER'));


const startServer = async() => {
  const app = await buildApp();

  try{
    app.listen({host: host, port: port}, err => {
      if(err) throw err
      console.log(`Server   -> http://${host}:${port}`);
      console.log(`Docs-api -> http://localhost:3333/docs-api`)
    });
  }
  catch(err) {
    if(err instanceof Error) console.log(`Error when starting server: ${err}`);
  }
}

startServer();