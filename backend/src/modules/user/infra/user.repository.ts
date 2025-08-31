import { ClientDb } from "@/db/connection";
import { User, UserInsert } from "../domain/entities/User";
import { ICreatedUser } from "../domain/contracts/CreatedUser";
import { userTable } from "@/db/schemas/user.schema";
import { CustomError } from "@/Errors/CustomerError";
import { ISearchableFields } from "../domain/contracts/SearchableFields";
import { and, eq } from "drizzle-orm";

export async function Create_User(
  user: UserInsert, 
  clientDb: ClientDb
): Promise<ICreatedUser> {
  try{
    const [result] = await clientDb
      .insert(userTable)
      .values(user)
      .returning({
        username: userTable.username,
        email: userTable.email
      })
      .catch((error) => {
        throw new CustomError({
          message: "Erro - não foi possível registrar o usuário",
          errMessage: error instanceof Error ? error.message : error,
          statusCode: 500,
          origin: "repository"
        });
      });

    return result
  }
  catch(error) {
    if(error instanceof CustomError) throw error;
    throw new Error("Erro ao registrar usuário");
  };
};

export async function Find_User(
  fields: Partial<ISearchableFields>,
  clientDb: ClientDb
): Promise<User> {
  try {
    const allowed_filters: Partial<Record<keyof typeof userTable, any>> = {
      username: userTable.username,
      email: userTable.email,
      phone: userTable.phone
    };

    const queey_conditions = Object.entries(fields).flatMap(([key, value]) => {
      const column = allowed_filters[key as keyof typeof allowed_filters];

      if(column && value !== undefined) return [eq(column, value)];

      return [];
    });

    const [result] = await clientDb.select()
      .from(userTable)
      .where(and(...queey_conditions))
      .catch((error) => {
        throw new CustomError({
          message: "Erro ao buscar usuários",
          errMessage: error instanceof Error ? error.message : error,
          statusCode: 500,
          origin: "repository"
        });
      });
    
    return result;
  }
  catch(error) {
    if(error instanceof CustomError) throw error;
    throw new Error("Erro ao buscar usuário");
  }
}