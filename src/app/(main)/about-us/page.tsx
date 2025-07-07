"use client";

import { GetTeams } from "@/services/teams";
import { useEffect, useState } from "react";
import { cultures } from "@/features/about-us/data/cultures";
import { timelines } from "@/features/about-us/data/timelines";
import Timeline from "@/features/about-us/components/CompanyHistorySection";
import TeamCard from "@/features/team/components/TeamCard";
import { ResponseTeam } from "@/features/team/type";

export default function AboutUsPage() {
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
    <>
      <div className="my-30 container mx-auto">
        <div className="mb-10">
          <h1 className="font-bold text-2xl">Company history</h1>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10">
            {timelines.map((timeline, i) => {
              return (
                <Timeline
                  key={i}
                  year={timeline.year}
                  title={timeline.title}
                  description={timeline.description}
                  classname={i % 2 == 0 ? "timeline-start" : "timeline-end"}
                />
              );
            })}
          </ul>
        </div>
        <div className="mb-10">
          <h1 className="font-bold text-2xl">Team Members</h1>
          <div className="grid grid-cols-1 md:grid-cols-5 justify-items-center mt-5 gap-5">
            {teams.map((team, i) => {
              return (
                <TeamCard
                  key={i}
                  picture={team.picture.large}
                  firstname={team.name.first}
                  lastname={team.name.last}
                />
              );
            })}
          </div>
        </div>
        <div className="mb-10">
          <h1 className="font-bold text-2xl">Culture</h1>
          {cultures.map((culture, i) => {
            return (
              <div
                key={i}
                className={`card card-md transition ease-in-out duration-300 ${
                  i % 2 == 0
                    ? "bg-base-200 hover:bg-base-300 shadow-md"
                    : "bg-slate-200 hover:bg-slate-300 shadow-md"
                } w-full my-3`}
              >
                <div className="card-body">
                  <h2 className="card-title">{culture.title}</h2>
                  <h3>{culture.subtitle}</h3>
                  <p>{culture.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
