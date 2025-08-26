import { ClientDb } from "@/db/connection";
import { BugInsert } from "@/modules/bugs/models/bugs.model";
import { BugInputDTO } from "./DTO/create.input.dto";
import { BugOutputDTO } from "./DTO/create.output.dto";

export interface Create_Bug {
  Repository_Create: (bugDataProps: BugInsert, Drizzle_Client: ClientDb) => Promise<BugOutputDTO[]>;
  Bug: BugInputDTO;
}