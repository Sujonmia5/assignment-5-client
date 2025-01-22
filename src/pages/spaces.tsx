import { useState } from "react";
import WhyChoiceUs from "../components/component/hero/hero";
import Rooms, { TRoomProps } from "../components/component/room/room";
import Header from "../components/ui/header/header";
import Spinner from "../components/ui/spinner/spinner";
import { useGetRoomsQuery } from "../redux/api/roomAPI";
import { spaceData } from "../utils/utilsData";

const Spaces = () => {
  const [limit, setLimit] = useState<number>(10);
  const [sort, setSort] = useState<number | null>(null);
  const [filterValue, setFilterValue] = useState<number | null>(null);

  // Fetch rooms data from API
  const {
    data = [],
    isLoading,
    // refetch,
  } = useGetRoomsQuery({ limit, sort, filterValue }, {});

  if (isLoading) return <Spinner />;

  const allData: TRoomProps = {
    data: data?.data,
    limit,
    setLimit,
    sort,
    setSort,
    filterValue: filterValue ?? null,
    setFilterValue,
  };

  return (
    <div>
      <Header hight={85} data={spaceData} />
      <Rooms allData={allData} />
      <WhyChoiceUs />
    </div>
  );
};

export default Spaces;
