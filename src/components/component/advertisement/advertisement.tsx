import Card from "./card";

import { FcOvertime } from "react-icons/fc";
import { GiConfirmed } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import Hero from "../../ui/hero/hero";

const services = [
  {
    icon: <FcOvertime className="size-16 text-info" />,
    title: "Real-Time Availability",
  },
  {
    icon: <GiConfirmed className="size-16 text-info" />,
    title: "Instant Booking Confirmation",
  },
  {
    icon: <GrSchedule className="size-16 text-info" />,
    title: "Flexible Scheduling",
  },
  {
    icon: <BiSupport className="size-16 text-info" />,
    title: "24/7 Support",
  },
];

const Advertisement = () => {
  return (
    <div className="px-12">
      <h2 className="text-4xl text-info font-exo font-medium">Hot Deals</h2>
      <div className="text-info w-full h-fit my-5 flex items-center justify-around">
        {Array.from({ length: 3 }).map((_, i) => {
          return <Card key={i} />;
        })}
      </div>

      <Hero />
      <div className="mt-28 w-11/12  mx-auto flex justify-between items-center gap-x-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center shadow-2xl p-4 w-60 shadow-primary-light rounded-lg text-center h-52"
          >
            <div className="bg-primary-light w-fit p-4 rounded-3xl">
              {service.icon}
            </div>
            <div className="text-info font-semibold text-xl mt-4">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
