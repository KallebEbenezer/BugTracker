import { ClientDb, db } from "@/db/connection";
import { bugsTable } from "@/db/schemas/bug.schema";
import { CustomError } from "@/Errors/CustomerError";
import { Bug, BugInsert } from "@/modules/bugs/domain/entities/Bug";
import { and, eq } from "drizzle-orm";
import { CreatedBugDTO } from "../domain/contracts/CreatedBug";
import { SearchableFields } from "../application/services/DTO/searchableFields.dto";

export async function CreateBug(bugDataProps: BugInsert, Drizzle_Client: ClientDb): Promise<CreatedBugDTO[]> {
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
      });

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
                                      
export async function FindBug(fields: Partial<SearchableFields>): Promise<Bug[]> {
  try {
    const allowedFilters: Partial<Record<keyof typeof bugsTable, any>> = {
      id: bugsTable.id,
      title: bugsTable.title,
      status: bugsTable.status
    };

    const conditions = Object.entries(fields).flatMap(([key, values]) => {
      const columns = allowedFilters[key as keyof typeof allowedFilters];

      if (columns && values !== undefined) return [eq(columns, values)];

      return [];
    });

    const result = await db.select().from(bugsTable)
      .where(and(...conditions))
      .catch((error) => {
        throw new CustomError({
          message: "Was not possible insert data of bug",
          errMessage: error instanceof Error ? error.message : error,
          statusCode: 500,
          origin: "repository"
        });
      });

    return result

  }
  catch (error) {
    if (error instanceof CustomError) {
      console.log({ depure_error: error.errMessage });
      throw error
    }
    throw new Error("Was not possible register the bug");
  }
}