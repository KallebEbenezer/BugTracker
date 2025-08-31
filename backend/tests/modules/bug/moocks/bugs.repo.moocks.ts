import { ClientDb } from "@/db/connection";
import { CreatedBugDTO } from "@/modules/bugs/domain/contracts/CreatedBug";
import { BugInsert } from "@/modules/bugs/domain/entities/Bug";

export async function Create_Bug_Moock(bugDataProps: BugInsert, drizzle_Client?: ClientDb): Promise<CreatedBugDTO> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return {
      title: bugDataProps.title,
      status: bugDataProps.status,
      created_at: new Date()
    };
  }
  catch (error) {
    if (error instanceof Error) throw error;
    throw new Error("erro");
  }
}