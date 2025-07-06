import { PiQuotesFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { ITestimonial } from "../types";

export default function TestimonialCard({ name, quotes }: ITestimonial) {
  return (
    <div className="card card-lg w-96 bg-slate-100 shadow-md mx-auto">
      <div className="card-body">
        <PiQuotesFill className="my-2" />
        <p className="text-gray-600">{quotes}</p>
        <div className="mt-10 flex gap-5 bottom-0">
          <FaUserCircle className="w-10 h-10 rounded-full shadow-xl my-auto" />
          <div>
            <h1 className="block text-gray-900 font-bold">{name}</h1>
            <p className="text-gray-700">Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
