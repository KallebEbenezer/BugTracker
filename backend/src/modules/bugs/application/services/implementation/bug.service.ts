import { db } from "@/db/connection";
import { CustomError } from "@/Errors/CustomerError";
import * as Contracts from "@/modules/bugs/domain/contracts/bug.services.contracts";
import { Bug } from "@/modules/bugs/domain/entities/Bug";
import * as ILanguageRepo from "@/modules/programming-languages/domain/contracts/programming_languages.contracts";
import * as crypto from "crypto";

export async function Create_Bug(
  Repository_Create: Contracts.Create_Bug["Repository_Create"],
  Language_Repo_Find: ILanguageRepo.Find_Language["repository_find"],
  Create_User_Bug_Relation: Contracts.Create_Bug["User_Bug_Relation_Repo"]
) {
  return async function (Bug: Contracts.Create_Bug["Bug"]) {
    try {
      const { technology, programming_language, ...bugObj } = Bug;

      const language = await Language_Repo_Find(Bug.programming_language, db);

      if (language.length <= 0) throw new CustomError({
        message: "Linguagem não encontrada",
        statusCode: 409,
        origin: "service"
      });

      const bugToSave = {
        id: crypto.randomUUID(),
        programming_language_id: language[0]?.id,
        technology_id: "4", //hard coded -test only
        ...bugObj
      };

      const new_bug = await Repository_Create(bugToSave, db);

      await Create_User_Bug_Relation({
        id: crypto.randomUUID(),
        user_id: "123123123", //hard coded -test only 
        bug_id: new_bug.id
      },
        db
      );

      return { ...new_bug };
    }
    catch (error) {
      if (error instanceof CustomError) {
        console.log(error.errMessage);
        throw error
      }
      throw new Error("Error");
    };
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