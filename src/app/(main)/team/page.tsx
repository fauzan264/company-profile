"use client";
import TeamCard from "@/features/team/components/TeamCard";
import { GetTeams } from "@/services/teams";
import { useEffect, useState } from "react";
import { ResponseTeam } from "@/features/team/type";

export default function TeamPage() {
  const [teams, setTeams] = useState<ResponseTeam[]>([]);
  const getDataTeams = async () => {
    try {
      const response = await GetTeams();
      setTeams(response.data.results);
    } catch (error) {
      console.log("Failed to fetch teams: ", error);
    }
  };

  useEffect(() => {
    getDataTeams();
  }, []);

  return (
    <div className="container my-30 mx-auto">
      <h1 className="font-bold text-3xl">Teams</h1>
      <div className="grid grid-cols-5 justify-items-center gap-5 mt-5">
        {teams.map((team, i) => {
          return (
            <TeamCard
              key={i}
              picture={team.picture.medium}
              firstname={team.name.first}
              lastname={team.name.last}
            />
          );
        })}
      </div>
    </div>
  );
}
