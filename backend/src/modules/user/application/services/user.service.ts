import * as Contracts from "@/modules/user/domain/contracts/user.contracts";
import { UserBody } from "../../domain/entries";
import { db } from "@/db/connection";
import { CustomError } from "@/Errors/CustomerError";
import * as crypto from "crypto";
import { ICreatedUser } from "../../domain/contracts/CreatedUser";

export async function Create_User(
  Repository_Create: Contracts.IUserRepository["Repository_Create"],
  Repository_Find: Contracts.IUserRepository["Repository_Find"]
) {
  return async (User: UserBody): Promise<ICreatedUser> => {
    try {
      const alreadyExists = await Repository_Find({email: User.email}, db);

      if(alreadyExists) throw new CustomError({
        message: "Usuário já cadastrado",
        statusCode: 409,
        origin: "service"
      });

      const userToSave = {
        ...User,
        id: crypto.randomUUID()
      };

      return await Repository_Create(userToSave, db);
    }
    catch(error) {
      if(error instanceof CustomError) throw error;
      throw new Error("Erro ao criar usuáro");
    };
  };
}