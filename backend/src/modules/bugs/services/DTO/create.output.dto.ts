export interface BugOutputDTO {
  title: string;
  status: "pending" | "progress" | "resolved";
  created_at: Date;
}

export interface BugInputDTO {
  
}