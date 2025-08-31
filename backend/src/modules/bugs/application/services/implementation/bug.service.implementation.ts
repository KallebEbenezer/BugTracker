import { db } from "@/db/connection";
import { CustomError } from "@/Errors/CustomerError";
import * as Contracts from "@/modules/bugs/domain/contracts/bug.services.contracts";
import { CreatedBugDTO } from "@/modules/bugs/domain/contracts/CreatedBug";
import { Bug } from "@/modules/bugs/domain/entities/Bug";
import * as crypto from "crypto";

export async function Create_Bug(
  Repository_Create: Contracts.Create_Bug["Repository_Create"],
  Bug: Contracts.Create_Bug["Bug"]
): Promise<CreatedBugDTO> {
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

    return { ...result };
  }
  catch (error) {
    if (error instanceof CustomError) throw error;
    throw new Error("Error");
  };
};

export async function Find_Bug(
  Repository_Find: Contracts.Find_Bug["Repository_Find"],
  fields: Contracts.Find_Bug["Fields"]
): Promise<Bug[]> {
  try {
    const response = await Repository_Find({ status: fields.status });
    return response
  }
  catch (error) {
    if (error instanceof CustomError) throw error
    throw new Error("Was not possible find a bug");
  };
};