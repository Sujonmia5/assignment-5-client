import image1 from "../../../assets/image/1-1-e1735202815310.jpg";
import image2 from "../../../assets/image/beautiful-dining-room-2023-11-27-04-50-58-utc-1-qymcpb60ktqxtavgvccfbfp1x9vd9f9s0q9xyjt54w.jpg";

const Hero = () => {
  return (
    <>
      <div className="my-28 w-full grid grid-cols-12 ">
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
          <div className="mt-10 flex items-start justify-between px-4 ">
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
    </>
  );
};

export default Hero;
