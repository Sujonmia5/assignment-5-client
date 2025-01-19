import { BsCalendar2Date } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { GrCheckboxSelected } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { PiOfficeChairBold } from "react-icons/pi";

const WhyChoiceUs = () => {
  const ChoiceData = [
    {
      title: "Fast Wi-fi Connection",
      description: "Experience unlimited discount options when booking your",
      icon: <FaWifi className="size-14 text-white/90" />,
    },
    {
      title: "Working Set",
      description: "lorem ipsum dolor sit amet, consectetur adip",
      icon: <IoSettingsOutline className="size-14 text-white/90" />,
    },
    {
      title: "Comfort Chair",
      description: "lorem ipsum dolor sit amet, consectetur adip",
      icon: <PiOfficeChairBold className="size-14 text-white/90" />,
    },
  ];

  const ChoiceData2 = [
    {
      icon: <GrCheckboxSelected className="size-14 text-primary-light" />,
      title: "selecet a Room",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      icon: <BsCalendar2Date className="size-14 text-primary-light" />,
      title: "Choose Date & Time",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      icon: <GiConfirmed className="size-14 text-primary-light" />,
      title: "Confirm Booking",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
  ];
  return (
    <div>
      <div className="mt-20 px-12 py-5 bg-header-bg bg-no-repeat bg-cover bg-center w-screen h-[600px]">
        <div className=" text-start">
          <h2 className="text-6xl text-white font-exo font-semibold leading-tight">
            Why Choose <span className="text-primary-light">Us?</span>
          </h2>
        </div>
        <div className="grid  grid-cols-2 gap-4 mt-5">
          <div className="grid grid-cols-1 gap-y-4">
            {ChoiceData.map((item, index) => (
              <div
                key={index}
                className="card bg-info hover:border-2 border-primary-light card-side shadow-xl max-w-2xl flex items-center px-5"
              >
                <div className="flex items-center justify-center size-20 rounded-full bg-primary-light ">
                  {item.icon}
                </div>
                <div className="card-body">
                  <h2 className="card-title font-exo font-semibold text-3xl">
                    {item.title}
                  </h2>
                  <p className="text-white/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className=" text-white">
            <div>
              <h2 className="text-3xl text-center hover:underline transition-all font-exo font-semibold leading-tight">
                Easy to Choice Us
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-y-4 mt-10">
              {ChoiceData2.map((item, index) => (
                <div
                  key={index}
                  className="card bg-info border-2 border-info hover:border-primary-light card-side shadow-xl max-w-2xl flex items-center p-5  gap-4"
                >
                  <div>{item.icon}</div>
                  <div className="">
                    <h3 className="text-xl font-semibold font-exo capitalize">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm capitalize text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoiceUs;
