import { ClientDb } from "@/db/connection"
import { BugDataProps } from "../models/bugs.model";

export interface Create_Bug {
  Drizzle_Client: ClientDb;
  bug: BugDataProps
}