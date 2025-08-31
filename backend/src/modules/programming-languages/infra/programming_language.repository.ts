import { ClientDb } from "@/db/connection";
import { programming_languageTable } from "@/db/schemas/programming_anguage.schema";
import { Language } from "../domain/entities/ProgrammingLanguage";
import { CustomError } from "@/Errors/CustomerError";
import { eq } from "drizzle-orm";

export async function Create_Language(
  language: Language,
  clientDb: ClientDb
): Promise<Language> {
  try {
    const [result] = await clientDb
      .insert(programming_languageTable)
      .values(language)
      .catch((error) => {
        throw new CustomError({
          message: "Erro ao registrar linguagem",
          errMessage: error instanceof Error ? error.message : error,
          origin: "repository",
          statusCode: 500
        });
      });

    return result;
  }
  catch (error) {
    if (error instanceof CustomError) throw error;
    throw new Error("Erro ao registrar linguagem");
  };
};

export async function Find_Language(
  language_name: string,
  clientDb: ClientDb
): Promise<Language[]> {
  try {
    const result = await clientDb
      .select()
      .from(programming_languageTable)
      .where(eq(programming_languageTable.name, language_name))
      .catch((error) => {
        throw new CustomError({
          message: "Não possível buscar linguagem",
          errMessage: error instanceof Error ? error.message : error,
          origin: "repository",
          statusCode: 500
        });
      });

    return result;
  }
  catch(error) {
    if(error instanceof CustomError) throw error;
    throw new Error("Erro ao buscar linguagem");
  }
}