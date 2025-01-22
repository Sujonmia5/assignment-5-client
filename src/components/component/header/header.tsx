import { Link } from "react-router-dom";

const HeaderContent = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-center items-center lg:gap-x-5 py-72  lg:py-80 lg:px-20">
      <div className="flex items-center w-fit">
        <div className=" pr-20">
          <h1 className="text-[80px] font-exo font-medium text-white">
            The <span className="text-primary-light font-bold">Perfect</span>{" "}
            Place <br />
            For Creativity
          </h1>
        </div>
        <div className="h-[240px] w-[1px] bg-white"></div>
      </div>
      <div className="pl-20 ">
        <p className="w-[480px] text-xl font-faSolid text-justify mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut enim
          ad minim veniam.consectetur
        </p>
        <Link
          className="w-32 h-32 px-10 py-5 border  rounded-full text-white hover:border-none hover:bg-primary-light transition-all text-lg uppercase font-semibold"
          to="/spaces"
        >
          Booking Now
        </Link>
      </div>
    </div>
  );
};

export default HeaderContent;
