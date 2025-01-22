import { Button } from "antd";
import RoomCard from "../roomCard/roomCard";

const Features = ({ data }: { data: [] }) => {
  console.log(data);

  return (
    <div className="my-20 text-info px-12">
      <div>
        <h2 className="text-6xl font-exo font-semibold leading-tight">
          Increase your Productivity <br />
          with <span className="font-bold text-primary-light">Our Spaces</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {data?.map((room) => (
          <RoomCard room={room} key={room?._id} />
        ))}
      </div>
      <div className="w-full h-20 my-10 flex items-center justify-center ">
        <a href="/spaces">
          <Button
            type="primary"
            variant="filled"
            size="large"
            className="font-exo text-xl capitalize "
          >
            see more
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Features;
