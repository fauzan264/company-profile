export interface Team {
  picture: string;
  firstname: string;
  lastname: string;
}

interface ResponseTeam {
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
}
