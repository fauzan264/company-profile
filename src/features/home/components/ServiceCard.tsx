import { IServiceComponent } from "../types";

export default function ServiceCard({
  title,
  IconComponent,
}: IServiceComponent) {
  return (
    <div className="card card-sm bg-base-100 w-40 h-40 shadow-sm mx-auto hover:bg-gray-100 transition duration-300">
      <div className="card-body justify-center mx-auto">
        <IconComponent className="w-10 h-10 mx-auto" />
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}
