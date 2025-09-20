interface BugParams {
  id: string;
  title: string;
  status: string;
  description: string;
  resolution: string;
  technology_id: string;
  programming_language_id: string;
}

export class Bug {
  constructor(
    private id: string,
    private title: string,
    private status: string,
    private description: string,
    private resolution: string,
    private technology_id: string,
    private programming_language_id: string,
  ) {}
}