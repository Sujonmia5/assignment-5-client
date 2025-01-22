import WhyChoiceUs from "../components/component/hero/hero";
import Rooms from "../components/component/room/room";
import Header from "../components/ui/header/header";
import Spinner from "../components/ui/spinner/spinner";
import { useGetRoomsQuery } from "../redux/api/roomAPI";
import { spaceData } from "../utils/utilsData";

const Spaces = () => {
  // Fetch rooms data from API
  const { data = [], isLoading, refetch } = useGetRoomsQuery("");

  if (isLoading) return <Spinner />;

  return (
    <div>
      <Header hight={85} data={spaceData} />
      <Rooms data={data.data} />
      <WhyChoiceUs />
    </div>
  );
};

export default Spaces;
