import { ClientDb } from "@/db/connection";
import { bugsTable } from "@/db/schemas/bug.schema";
import { BugInsert } from "@/modules/bugs/models/bugs.model";
import { BugOutputDTO } from "../services/DTO/create.output.dto";

export async function CreateBug(bugDataProps: BugInsert, Drizzle_Client: ClientDb): Promise<BugOutputDTO[]> {
  try {
    return await Drizzle_Client.insert(bugsTable).values(bugDataProps)
    .returning({ 
      title: bugsTable.title,
      status: bugsTable.status,
      created_at: bugsTable.created_at 
    });
  }
  catch (error) {
    if (error instanceof Error) throw error
    console.log(error)
    throw new Error("Was not possible register a bug");
  } 
}