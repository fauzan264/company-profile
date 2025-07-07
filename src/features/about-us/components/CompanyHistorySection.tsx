import { ITimeLine } from "../type";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

interface TimelineComponentProps extends ITimeLine {
  classname: string;
}

export default function Timeline({
  year,
  title,
  description,
  classname,
}: TimelineComponentProps) {
  return (
    <li>
      <div className="timeline-middle">
        <IoCheckmarkCircleSharp className="w-5 h-5" />
      </div>
      <div className={`${classname} mb-10 md:text-end`}>
        <time className="font-mono italic">{year}</time>
        <div className="text-lg font-black">{title}</div>
        {description}
      </div>
      <hr />
    </li>
  );
}
