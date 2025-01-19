import { Divider } from "antd";
import { Link } from "react-router-dom";
import vediolayout from "../../../assets/image/diverse-female.jpg";

const Header = () => {
  const headContent = [
    {
      title: "Creative Member",
      total: "127K+",
    },
    {
      title: "Collaboration Projects",
      total: "500+",
    },
    {
      title: "Networking Events",
      total: "500+",
    },
  ];
  return (
    <div className="h-[115vh] w-full bg-header-bg bg-cover bg-center bg-no-repeat -mt-32 rounded-bl-[140px]">
      <div className="flex justify-center items-center gap-x-5 py-80 px-20">
        <div className="flex items-center">
          <div className="pr-20">
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
            Booking Now{" "}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl -mt-52 bg-primary-light mx-auto h-96 overflow-hidden p-6 rounded-[40px]">
        <div className="flex w-full h-full overflow-hidden rounded-2xl ">
          <div className="w-full h-full rounded-2xl">
            <img
              className="w-11/12 h-[336px] object-cover object-center rounded-2xl"
              src={vediolayout}
              alt=""
            />
          </div>
          <div className="w-96">
            {headContent.map(({ title, total }, i) => (
              <>
                <div
                  key={i}
                  className="flex flex-col items-start gap-x-3 text-xl font-medium font-exo"
                >
                  <p className="text-5xl text-white">{total}</p>
                  <p className="text-xl text-white">{title}</p>
                </div>
                {i !== 2 && <Divider className="bg-white" />}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
