import axios from "axios";

export const GetTeams = () => {
  const response = axios.get("https://randomuser.me/api/?results=5");
  return response;
};
