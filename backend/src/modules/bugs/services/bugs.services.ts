import { BugDataProps } from "@/modules/bugs/models/bugs.model";
import { BugOutputDTO } from "./DTO/create.output.dto";
import { ClientDb } from "@/db/connection";

export interface Create_Bug {
  Repository_Create: (Drizzle_Client: ClientDb, bugDataProps: BugDataProps) => Promise<BugOutputDTO>;
  Bug: BugDataProps;
}