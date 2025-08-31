import { ClientDb } from "@/db/connection";
import { Language } from "../entities/ProgrammingLanguage";

export interface Create_Language {
  repository_create: (language: Language, cliendDb: ClientDb) => Promise<Language>;
  language: string;
};

export interface Find_Language {
  repository_find: (language: string, clientDb: ClientDb) => Promise<Language[]>;
  language: string;
}