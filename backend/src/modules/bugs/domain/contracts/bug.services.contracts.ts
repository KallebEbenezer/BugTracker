import { ClientDb } from "@/db/connection";
import { Bug, BugInsert } from "@/modules/bugs/domain/entities/Bug";
import { CreatedBugDTO } from "./CreatedBug";
import { CreateBugInput } from "../entries";
import { SearchableFields } from "../../application/services/DTO/searchableFields.dto";

export interface Create_Bug {
  Repository_Create: (bugDataProps: BugInsert, Drizzle_Client: ClientDb) => Promise<CreatedBugDTO             []>;
  Bug: CreateBugInput;
}

export interface Find_Bug {
  Repository_Find: (fields: Partial<SearchableFields>) => Promise<Bug[]>;
  Fields: Partial<SearchableFields>;
}