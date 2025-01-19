const RoomCard = ({ room }) => {
  return (
    <div className="rounded-xl shadow-md relative">
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-96 object-cover rounded-xl"
      />
      <div className="absolute bottom-4 right-4 bg-info/70 w-80 text-start p-6 rounded-2xl">
        <h3 className="text-2xl text-white capitalize font-semibold">
          {room.name}
        </h3>
        <p className="text-sm text-white/80">{room.capacity} people</p>
        <p className="text-lg font-bold text-white/80 capitalize">
          Price: per slot{" "}
          <span className="text-yellow-500">{room.pricePerSlot}$</span>
        </p>
        <div className="w-full h-full flex justify-end items-center">
          <a
            role="button"
            className="btn bg-primary-light hover:text-info text-white text-lg font-exo"
          >
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
