export interface Team {
  picture: string;
  firstname: string;
  lastname: string;
}

export interface ResponseTeam {
  picture: {
    medium: string;
  };
  name: {
    first: string;
    last: string;
  };
}
