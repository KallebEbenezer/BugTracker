import { programming_languageTable } from "@/db/schemas/programming_anguage.schema";
import { InferSelectModel } from "drizzle-orm";

export type Language = InferSelectModel<typeof programming_languageTable>;