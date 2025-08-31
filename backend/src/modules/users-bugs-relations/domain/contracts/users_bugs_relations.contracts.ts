import { RelationInputDTO } from "../RelationsInputDTO";

export interface IUserBugRelations {
  create: (data: RelationInputDTO) => Promise<void>;
}