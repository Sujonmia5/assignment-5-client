const SpaceHeader = () => {
  return (
    <div className=" h-[85vh] -mt-32 bg-header-bg  bg-cover bg-no-repeat bg-center rounded-bl-[120px]">
      <div className="flex justify-center items-center gap-x-5 py-80 px-20">
        <div className="flex items-center">
          <div className="pr-20">
            <h1 className="text-[80px] font-exo font-medium text-white">
              Our <span className="text-primary-light font-bold">Spaces</span>{" "}
            </h1>
            <p className="text-lg font-faSolid text-white">
              Choose from our variety of spaces to suit your needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceHeader;
