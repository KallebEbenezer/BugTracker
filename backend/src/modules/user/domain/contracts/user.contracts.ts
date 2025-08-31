import { UserBody } from "../entries";
import { ICreatedUser } from "./CreatedUser";
import { User, UserInsert } from "../entities/User";
import { ClientDb } from "@/db/connection";
import { ISearchableFields } from "./SearchableFields";

export interface IUserRepository {
  Repository_Create: (user: UserInsert, clientDb: ClientDb) => Promise<ICreatedUser>;
  Repository_Find: (fields: Partial<ISearchableFields>, clientDb: ClientDb) => Promise<User>;
  User:  UserBody;
}