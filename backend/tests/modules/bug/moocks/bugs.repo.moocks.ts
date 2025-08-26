import { ClientDb } from "@/db/connection";
import { BugInsert } from "@/modules/bugs/models/bugs.model";
import { BugOutputDTO } from "@/modules/bugs/services/DTO/create.output.dto";

export async function Create_Bug_Moock(bugDataProps: BugInsert, drizzle_Client?: ClientDb): Promise<BugOutputDTO[]> {
  try{
    await new Promise((resolve) => setTimeout(resolve, 200));
    return [{
      title: bugDataProps.title,
      status: bugDataProps.status,
      created_at: new Date()
    }] 
  }
  catch(error) {
    if(error instanceof Error) throw error;
    throw new Error("erro");
  }
}