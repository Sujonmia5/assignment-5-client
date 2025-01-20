import { THeaderProps } from "../../../types/header";

const Header = ({ data, hight }: { data?: THeaderProps; hight: number }) => {
  return (
    <div
      style={{
        height: `${hight}vh`,
      }}
      className={`-mt-32 bg-header-bg  bg-cover bg-no-repeat bg-center rounded-bl-[120px]`}
    >
      <div className="flex justify-center items-center gap-x-5 py-80 px-20">
        <div className="text-center w-1/2 -mt-20">
          <h1 className="text-[90px] font-exo font-medium text-white">
            {data?.title}{" "}
            <span className="text-primary-light font-bold">{data?.title1}</span>
          </h1>
          <p className="text-lg font-faSolid text-white">{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
