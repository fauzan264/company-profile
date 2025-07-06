import Hero from "@/features/home/components/Hero";
import ServiceCard from "@/features/home/components/ServiceCard";
import TestimonialCard from "@/features/home/components/Testimonial";
import testimonials from "@/features/home/data/testimonials";
import Image from "next/image";
import { services } from "@/features/home/data/services";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-5 my-10">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 group">
            <Image
              src="/images/mariia-shalabaieva-unsplash.jpg"
              alt="dummy"
              className="rounded-md transition duration-300 group-hover:scale-105 group-hover:shadow-lg"
              width={600}
              height={400}
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="mb-5 text-3xl font-bold">Our Company</h1>
            <p>
              Uber Technologies, Inc. is a global technology company
              headquartered in San Francisco, California. Founded in March 2009
              by Garrett Camp and Travis Kalanick, Uber started with a simple
              idea: tap a button, get a ride. Since launching its first ride in
              San Francisco in 2010, Uber has transformed the transportation
              landscape, pioneering the ride-hailing industry.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 my-20 py-30">
        <div className="container mx-auto px-5">
          <h1 className="mb-5 text-2xl text-center">Our Services</h1>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:mx-50">
            {services.map((service, i) => {
              return (
                <ServiceCard
                  key={i}
                  title="Ride"
                  IconComponent={service.children}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10">
        <h1 className="mb-5 text-2xl text-center">Testimonial</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:mx-10">
          {testimonials.map((testimonial, i) => {
            return (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                quotes={testimonial.quotes}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
