export interface Team {
  picture: string;
  firstname: string;
  lastname: string;
}

export interface ResponseTeam {
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
}
