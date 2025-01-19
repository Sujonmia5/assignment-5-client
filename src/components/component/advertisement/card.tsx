import { Button } from "antd";

const Card = () => {
  return (
    <div className="w-[450px] h-72 p-4 rounded-lg">
      <div className="w-full h-full bg-white/50 shadow-md  rounded flex items-center ">
        <div className="relative w-full h-full">
          <div className="w-40 absolute -top-5 -left-5 h-40 rounded-2xl bg-primary-light text-center flex flex-col items-center justify-center">
            <h2 className="text-xl text-yellow-400 font-bold uppercase">
              Up to 50%
            </h2>
            <h2 className="text-xl text-white uppercase font-bold">discount</h2>
          </div>
          <div className="absolute bottom-0 left-0 px-5 py-2  shadow-primary-light shadow-inner font-exo font-medium text-info uppercase m-4 rounded-md">
            GOSTAY0125
          </div>
        </div>
        <div className="w-11/12 -ml-24 pr-4 pt-4">
          <div className="space-y-5">
            <h2 className="text-lg font-exo font-semibold text-info">
              On Domestic Hotels for Selected Cards
            </h2>
            <p className="text-sm text-justify text-info/70">
              On room rate, for BRAC, City AMEX, DBBL, EBL, HSBC, LankaBangla,
              MTB, Prime Bank, StanChart, Trust Bank, UCB, Midland Bank cards.
              Till 28 Feb’25.
            </p>
          </div>
          <div className="w-full h-2 relative">
            <Button
              variant="outlined"
              // type="default"
              ghost
              color="cyan"
              className="hover:scale-110 absolute -bottom-10 right-1 text-base font-exo font-medium"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
