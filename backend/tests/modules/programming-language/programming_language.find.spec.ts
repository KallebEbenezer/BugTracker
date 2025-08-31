import { describe, it, expect } from "vitest";
import * as Programming_Language_Repository from "@/modules/programming-languages/infra/programming_language.repository";
import { db } from "@/db/connection";

describe("METHODS - [find] entity - [ programming_language ]", () => {
  const programming_language_repository = Programming_Language_Repository;
  
  it("Must return a list of programming languages", async() => {
    const result = await programming_language_repository.Find_Language("typescript", db);

    console.log(result) //depure only;

    expect(result).toHaveLength(1);
    expect(result).toBeDefined();
  })
})