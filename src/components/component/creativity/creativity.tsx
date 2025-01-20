import { FaShuffle } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { TbManualGearbox } from "react-icons/tb";

const Creativity = () => {
  const activityData = [
    {
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="40"
            height="40"
            fill="currentColor"
          >
            <path d="M9 21h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Zm3-19a8 8 0 0 1 4 15v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1a8 8 0 0 1 4-15Zm0 2a6 6 0 0 0-3 11.195V18h6v-2.805A6 6 0 0 0 12 4Zm-1.414 1.586a1 1 0 0 1 1.414 0l.586.586.586-.586a1 1 0 0 1 1.414 1.414L13.414 8l.586.586a1 1 0 0 1-1.414 1.414L12 9.414l-.586.586a1 1 0 0 1-1.414-1.414L10.586 8l-.586-.586a1 1 0 0 1 0-1.414Z" />
          </svg>
        </>
      ),
      title: "Creativity",
      descrption: "lorem ipsum dolor sit amet con laoreet et",
    },
    {
      icon: <TbManualGearbox className="size-10" />,
      title: "Collaborative",
      descrption: "lorem ipsum dolor sit amet con laoreet et",
    },
    {
      icon: <FaShuffle className="size-10" />,
      title: "Flexibility",
      descrption: "lorem ipsum dolor sit amet con laoreet et",
    },
    {
      icon: <FiSettings className="size-10" />,
      title: "Resources",
      descrption: "lorem ipsum dolor sit amet con laoreet et",
    },
  ];

  return (
    <div className="w-full py-16">
      <div className="grid grid-cols-12">
        <div className="col-span-7 text-start">
          <h2 className="text-7xl text-info font-exo font-semibold leading-snug">
            The Right <span className="text-primary-light">Atmosphere</span>{" "}
            Sparks Creativity
          </h2>
        </div>
        <div className="col-start-8 col-span-5 text-info/90 font-exo text-lg text-justify font-medium mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </div>
      </div>
      <div className="w-full h-[1px] bg-primary-light/90 my-10"></div>
      <div className="grid grid-cols-12 gap-x-2 mx-auto">
        {activityData.map((item, index) => (
          <div
            key={index}
            className="group w-[300px] mx-auto col-span-3 space-y-5 hover:bg-primary-light border border-primary-light rounded-2xl px-7 py-5 transition-all duration-500"
          >
            <div className="size-16 hover:scale-110 bg-primary-light rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <div className="space-y-1 group-hover:text-white transition-all duration-500 text-info font-exo">
              <h3 className="font-semibold text-4xl">{item.title}</h3>
              <p className="text-lg">{item.descrption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creativity;
