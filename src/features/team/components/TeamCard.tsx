import { Team } from "../type";

export default function TeamCard({ picture, firstname, lastname }: Team) {
  return (
    <div className="card bg-base-100 w-64 shadow-sm">
      <figure>
        <img
          src={picture}
          alt={`${firstname} ${lastname}`}
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">
          {firstname} {lastname}
        </h3>
        <div className="card-actions">
          <div className="badge badge-outline">Software Engineer</div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ut
          aperiam blanditiis nemo exercitationem magnam accusantium, vitae
          fugiat id quas.
        </p>
      </div>
    </div>
  );
}
