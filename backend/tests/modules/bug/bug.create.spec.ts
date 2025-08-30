import * as BugService from "@/modules/bugs/application/services/implementation/bug.service.implementation";
import { describe, expect, it } from "vitest";
import { Create_Bug_Moock } from "./moocks/bugs.repo.moocks";

describe("Testing methods in bugs entity", () => {
  const newBug = {
    title: "title",
    status: "conclued ",
    description: "description",
    resolution: "resolution hsfkafhkjfhlsdkjf",
    technology: "drizzle",
    programming_language: "typescript"
  }

  it("Must return a new bug", async () => {
    const result = await BugService.Create_Bug(Create_Bug_Moock, newBug);

    console.log(result)

    expect(result).toBeDefined();
    expect(result[0].title).toBe("title");
  });
})