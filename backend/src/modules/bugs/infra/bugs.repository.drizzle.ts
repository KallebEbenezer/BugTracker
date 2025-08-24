import { ClientDb } from "@/db/connection";
import { bugsTable } from "@/db/schemas/bug.schema";
import { BugDataProps } from "@/modules/bugs/models/bugs.model";
import { BugOutputDTO } from "../services/DTO/create.output.dto";

export async function CreateBug(Drizzle_Client: ClientDb, bugDataProps: BugDataProps): Promise<BugOutputDTO> {
  try {
    return await Drizzle_Client.insert(bugsTable).values(bugDataProps);
  }
  catch (error) {
    if (error instanceof Error) throw error
    throw new Error("Was not possible register a bug");
  } 
}