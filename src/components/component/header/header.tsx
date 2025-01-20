import { Link } from "react-router-dom";

const HeaderContent = () => {
  return (
    <div className="flex justify-center items-center gap-x-5 py-80 px-20">
      <div className="flex items-center">
        <div className="pr-16">
          <h1 className="text-[80px] font-exo font-medium text-white">
            The <span className="text-primary-light font-bold">Perfect</span>{" "}
            Place For Creativity
          </h1>
        </div>
        <div className="h-[240px] w-[1px] bg-white"></div>
      </div>
      <div className="pl-20 flex-1">
        <p className="w-[480px] text-lg font-faSolid text-justify mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut enim
          ad minim veniam.consectetur
        </p>
        <Link
          className="w-32 h-32 px-10 py-5 border  rounded-full text-white hover:border-none hover:bg-primary-light transition-all text-lg uppercase font-semibold"
          to="/"
        >
          Booking Now
        </Link>
      </div>
    </div>
  );
};

export default HeaderContent;
