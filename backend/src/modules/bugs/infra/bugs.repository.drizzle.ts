import { ClientDb } from "@/db/connection";
import { bugsTable } from "@/db/schemas/bug.schema";
import { CustomError } from "@/Errors/CustomerError";
import { BugInsert } from "@/modules/bugs/models/bugs.model";
import { BugOutputDTO } from "../services/DTO/create.output.dto";

export async function CreateBug(bugDataProps: BugInsert, Drizzle_Client: ClientDb): Promise<BugOutputDTO[]> {
  try {
    const response = await Drizzle_Client.insert(bugsTable).values(bugDataProps)
      .returning({
        title: bugsTable.title,
        status: bugsTable.status,
        created_at: bugsTable.created_at
      })
      .catch((error) => {
        throw new CustomError({
          origin: "repository",
          statusCode: 500,
          errMessage: error instanceof Error ? error.message : error,
          message: "Erro ao registrar bug"
        })
      })

    return response;
  }
  catch (error) {
    if (error instanceof CustomError) {
      console.log({ depure_error: error.errMessage });
      throw error
    }
    throw new Error("Was not possible register a bug");
  }
}