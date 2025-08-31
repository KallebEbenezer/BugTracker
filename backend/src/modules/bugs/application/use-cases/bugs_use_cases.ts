import * as BugServices from "@/modules/bugs/application/services/implementation/bug.service";
import * as BugRepository from "@/modules/bugs/infra/bugs.repository.drizzle";
import * as LanguageRepository from "@/modules/programming-languages/infra/programming_language.repository";
import * as UserBugRelationRepository from "@/modules/users-bugs-relations/infra/users_bugs_relations";

const create_bug_useCase = await BugServices.Create_Bug(
  BugRepository.CreateBug,
  LanguageRepository.Find_Language,
  UserBugRelationRepository.Create_Relation
);

export const bugUseCases = {
  create: create_bug_useCase
};