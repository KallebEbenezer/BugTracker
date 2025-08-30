import { ClientDb } from "@/db/connection";
import { BugOutputDTO } from "@/modules/bugs/application/services/DTO/create.output.dto";
import { BugInsert } from "@/modules/bugs/domain/bugs.model";

export async function Create_Bug_Moock(bugDataProps: BugInsert, drizzle_Client?: ClientDb): Promise<BugOutputDTO[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return [{
      title: bugDataProps.title,
      status: bugDataProps.status,
      created_at: new Date()
    }]
  }
  catch (error) {
    if (error instanceof Error) throw error;
    throw new Error("erro");
  }
}