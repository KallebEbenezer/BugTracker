import * as BugServices from "@/modules/bugs/application/services/implementation/bug.service";
import * as BugRepository from "modules/bugs/infra/bugs.repository.drizzle";
import { describe, expect, it } from "vitest";

describe("Test method Find_Bug of bugs entity", () => {

  it("find all bugs by searcable fields", async () => {
    const result = await BugServices.Find_Bug(BugRepository.FindBug, { status: "conclued" });

    expect(result).toBeDefined();
    expect(result.length > 0);
  });

});