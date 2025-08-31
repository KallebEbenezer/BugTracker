import { ClientDb } from "@/db/connection";
import { Bug, BugInsert } from "@/modules/bugs/domain/entities/Bug";
import { SearchableFields } from "../../application/services/DTO/searchableFields.dto";
import { CreateBugInput } from "../entries";
import { CreatedBugDTO } from "./CreatedBug";
import { UserBugRelationDTO } from "../../application/services/DTO/UserBugRelation";

export interface Create_Bug {
  Repository_Create: (bugDataProps: BugInsert, Drizzle_Client: ClientDb) => Promise<CreatedBugDTO>;
  User_Bug_Relation_Repo: (relation: UserBugRelationDTO, clientDb: ClientDb ) => Promise<void>,
  Bug: CreateBugInput;
};

export interface Find_Bug {
  Repository_Find: (fields: Partial<SearchableFields>) => Promise<Bug[]>;
  Fields: Partial<SearchableFields>;
};