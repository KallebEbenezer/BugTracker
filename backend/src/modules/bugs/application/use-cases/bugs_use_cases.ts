import * as BugServices from "@/modules/bugs/application/services/implementation/bug.service.implementation"
import * as BugRepository from "@/modules/bugs/infra/bugs.repository.drizzle";
import * as LanguageRepository from "@/modules/programming-languages/infra/programming_language.repository";

const create_bug_useCase = await BugServices.Create_Bug(BugRepository.CreateBug, LanguageRepository.Find_Language);

export const bugUseCases = {
  create: create_bug_useCase
};