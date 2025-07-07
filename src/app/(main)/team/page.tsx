"use client";
import { GetTeams } from "@/services/teams";
import { useEffect, useState } from "react";

export default function TeamPage() {
  const [teams, setTeams] = useState<any[]>([]);
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
            <div key={i} className="card bg-base-100 w-64 shadow-sm">
              <figure>
                <img
                  src={team.picture.large}
                  alt={`${team.name.first} ${team.name.last}`}
                  className="w-full"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">
                  {team.name.first} {team.name.last}
                </h3>
                <div className="card-actions">
                  <div className="badge badge-outline">Software Engineer</div>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio ut aperiam blanditiis nemo exercitationem magnam
                  accusantium, vitae fugiat id quas.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
