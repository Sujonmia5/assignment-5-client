import { Divider } from "antd";
import { TRoom } from "../../../types/utils";
import { FaArrowCircleRight } from "react-icons/fa";

const RoomCard = ({ room }: { room: TRoom }) => {
  return (
    <div className="rounded-xl shadow-md relative">
      <img
        src={room?.roomImgUrl[0]}
        alt={room?.name}
        className="w-full h-96 object-cover rounded-xl"
      />
      <div className="absolute bottom-4 right-4 bg-info/70 w-80 text-start p-6 rounded-2xl">
        <h3 className="text-3xl text-white capitalize font-semibold">
          {room?.name}
        </h3>
        <p className="text-base my-1 text-white/80 capitalize">
          capacity: {room?.capacity} people
        </p>
        <Divider type="horizontal" className="bg-white/70 my-4" />
        <div className="flex flex-row-reverse justify-between items-center">
          <div className="flex-1 w-full h-full flex justify-end items-center">
            <a
              role="button"
              href={`/spaces/${room?._id}`}
              className="w-fit h-fit flex items-center justify-center  text-white font-bold rounded-md font-exo text-xl leading-snug hover:text-primary-light  gap-x-1 transition-all duration-500 ease-in-out"
            >
              Book Now <FaArrowCircleRight />
            </a>
          </div>
          <p className="text-lg font-bold text-white capitalize">
            slot price{" "}
            <span className="text-yellow-500">{room?.pricePerSlot}$</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
