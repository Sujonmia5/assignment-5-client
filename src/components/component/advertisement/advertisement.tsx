import Card from "./card";
import image1 from "../../../assets/image/1-1-e1735202815310.jpg";
import image2 from "../../../assets/image/beautiful-dining-room-2023-11-27-04-50-58-utc-1-qymcpb60ktqxtavgvccfbfp1x9vd9f9s0q9xyjt54w.jpg";
import { FcOvertime } from "react-icons/fc";
import { GiConfirmed } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

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

      <div className="mt-36 w-full grid grid-cols-12 ">
        <div className="w-full col-start-1 mt-10 col-span-5 relative">
          <div className="absolute -top-16 right-10 rounded-2xl bg-white w-auto h-44 z-10 flex items-center justify-center">
            <img
              className="h-44 w-72 object-cover object-center rounded-2xl border-[10px] border-white"
              src={image2}
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              className="w-auto h-96 object-cover object-center rounded-3xl"
              src={image1}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 col-start-7 col-span-6">
          <div className="text-start">
            <h3 className="text-7xl font-exo font-semibold text-info">
              <span className="text-primary-light">Innovate</span> And <br />{" "}
              Grow Together
            </h3>
            <p className="text-info/80 leading-tight text-lg mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus <br />
              nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="mt-10 flex items-start justify-normal flex-wrap gap-3">
            <div className="w-80 h-44 bg-primary-light text-center p-4 rounded-3xl">
              <h2 className="text-5xl  font-exo font-semibold">Our Visson</h2>
              <div>
                <p className=" text-justify text-lg leading-tight">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  sapiente culpa fuga provident odit inventore voluptas?
                </p>
              </div>
            </div>
            <div className="w-80 h-44 text-center p-4 rounded-3xl text-primary-light border-2 border-primary-light">
              <h2 className="text-5xl  font-exo font-semibold">Our Mission</h2>
              <div>
                <p className="text-justify text-lg leading-tight">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  sapiente culpa fuga provident odit inventore voluptas?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
