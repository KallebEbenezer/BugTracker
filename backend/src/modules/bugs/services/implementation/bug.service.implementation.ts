import { db } from "@/db/connection";
import * as Contracts from "@/modules/bugs/services/bug.contracts";
import * as crypto from "crypto";
import { BugOutputDTO } from "../DTO/create.output.dto";
import { CustomError } from "@/Errors/CustomerError";
import { SearchableFields } from "../DTO/searchableFields.dto";

export async function Create_Bug(
  Repository_Create: Contracts.Create_Bug["Repository_Create"],
  Bug: Contracts.Create_Bug["Bug"]
): Promise<BugOutputDTO[]> {
  try {
    const { technology, programming_language, ...bugObj } = Bug

    //hard coded -test only
    const newBug = {
      id: crypto.randomUUID(),
      programming_language_id: "4",
      technology_id: "4",
      ...bugObj
    };

    const result = await Repository_Create(newBug, db);

    console.log(result)//depure only;
    
    return { ...result };
  }
  catch (error) {
    if (error instanceof CustomError) throw error
    throw new Error("Error");
  }
}

export function Find_Bug(
  Repository_Find: Contracts.Find_Bug["Repository_Find"],
  searchableFields: Contracts.Find_Bug["Searchable_Fields"]
) {
  try{
    const result = await Repository_Find(searchableFields);
  }
  catch(error) {
    if(error instanceof CustomError) throw error
    throw new Error("Was not possible find a bug");
  }
}