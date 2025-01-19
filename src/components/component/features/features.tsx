import RoomCard from "../roomCard/roomCard";

const Features = () => {
  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      capacity: 15,
      pricePerSlot: 150,
      image:
        "https://cdn.shopify.com/s/files/1/0605/0136/0804/files/Modern_meeting_room_with_advanced_technology.jpg?v=1703751846",
    },
    {
      id: 1,
      name: "Standard Room",
      capacity: 15,
      pricePerSlot: 150,
      image:
        "https://cdn.shopify.com/s/files/1/0605/0136/0804/files/Modern_meeting_room_with_advanced_technology.jpg?v=1703751846",
    },
    {
      id: 1,
      name: "Standard Room",
      capacity: 15,
      pricePerSlot: 150,
      image:
        "https://cdn.shopify.com/s/files/1/0605/0136/0804/files/Modern_meeting_room_with_advanced_technology.jpg?v=1703751846",
    },
    {
      id: 1,
      name: "Standard Room",
      capacity: 15,
      pricePerSlot: 150,
      image:
        "https://cdn.shopify.com/s/files/1/0605/0136/0804/files/Modern_meeting_room_with_advanced_technology.jpg?v=1703751846",
    },
  ];
  return (
    <div className="my-20 text-info px-12">
      <div>
        <h2 className="text-6xl font-exo font-semibold leading-tight">
          Increase your Productivity <br />
          with <span className="font-bold text-primary-light">Our Spaces</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {rooms.map((room) => (
          <RoomCard room={room} key={room.id} />
        ))}
      </div>
    </div>
  );
};

export default Features;
