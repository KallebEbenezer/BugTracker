import { db } from "@/db/connection";
import * as Contracts from "@bugs_service/bugs.services";

export async function Create_Bug(
  Repository_Create: Contracts.Create_Bug["Repository_Create"],
  Bug: Contracts.Create_Bug["Bug"]
) {
  try{  
    const result = await Repository_Create(db, Bug); 

    return { ...result }
  }
  catch(error) {
    if(error instanceof Error) throw error
    throw new Error("Error");
  }
}