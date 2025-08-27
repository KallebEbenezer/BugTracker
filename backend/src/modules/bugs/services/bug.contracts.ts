import { ClientDb } from "@/db/connection";
import { Bug, BugInsert } from "@/modules/bugs/models/bugs.model";
import { BugInputDTO } from "./DTO/create.input.dto";
import { BugOutputDTO } from "./DTO/create.output.dto";
import { SearchableFields } from "./DTO/searchableFields.dto";

export interface Create_Bug {
  Repository_Create: (bugDataProps: BugInsert, Drizzle_Client: ClientDb) => Promise<BugOutputDTO[]>;
  Bug: BugInputDTO;
}

export interface Find_Bug {
  Repository_Find: (searchableField: Partial<SearchableFields>) => Promise<Bug[]>;
  Searchable_Fields: Partial<SearchableFields>;
}