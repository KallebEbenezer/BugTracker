import { ClientDb } from "@/db/connection";
import { Bug, BugInsert } from "@/modules/bugs/domain/entities/Bug";
import { SearchableFields } from "../../application/services/DTO/searchableFields.dto";
import { CreateBugInput } from "../entries";
import { CreatedBugDTO } from "./CreatedBug";

export interface Create_Bug {
  Repository_Create: (bugDataProps: BugInsert, Drizzle_Client: ClientDb) => Promise<CreatedBugDTO>;
  Bug: CreateBugInput;
}

export interface Find_Bug {
  Repository_Find: (fields: Partial<SearchableFields>) => Promise<Bug[]>;
  Fields: Partial<SearchableFields>;
}