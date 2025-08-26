import { db } from "@/db/connection";
import * as Contracts from "@/modules/bugs/services/bug.contracts";
import * as crypto from "crypto";

export async function Create_Bug(
  Repository_Create: Contracts.Create_Bug["Repository_Create"],
  Bug: Contracts.Create_Bug["Bug"]
) {
  try{
    const {technology, programming_language, ...newBug } = Bug
    
    //hard coded -test only
    const bugToSave = {
      id: crypto.randomUUID(),
      programming_language_id: "4",
      technology_id: "4",
      ...newBug
    };

    const result = await Repository_Create(bugToSave, db);

    return { ...result };
  }
  catch(error) {
    if(error instanceof Error) throw error
    throw new Error("Error");
  }
}