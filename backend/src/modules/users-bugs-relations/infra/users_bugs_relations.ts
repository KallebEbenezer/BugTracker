import { ClientDb } from "@/db/connection";
import { user_bugs_relationsTable } from "@/db/schemas/user_bugs_relations.schema";
import { CustomError } from "@/Errors/CustomerError";

export async function Create_Relation(
  relation: { id: string, user_id: string, bug_id: string },
  clientDb: ClientDb
): Promise<void> {
  try {
    await clientDb
      .insert(user_bugs_relationsTable)
      .values(relation)
      .catch((error) => {
        throw new CustomError({
          message: "Não foi possível criar relação USER < BUG",
          errMessage: error instanceof Error ? error.message : error,
          statusCode: 500,
          origin: "repository",
        });
      });
  }
  catch(error) {
    if(error instanceof CustomError) throw error;
    throw new Error("Não foi possível cirar relação user < bug");
  }
}