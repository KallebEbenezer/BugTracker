export interface BugDataProps {
  id: string;
  title: string;
  status: "pending" | "progress" | "resolved" ;
  description: string;
  resolution: string;
  technology_id: string;
  programming_language_id: string;
}

export function BugsModel(BygProps: BugDataProps) {
  return {
    
  }
}