import WhyChoiceUs from "../components/component/hero/hero";
import Rooms from "../components/component/room/room";
import Header from "../components/ui/header/header";
import { spaceData } from "../utils/utilsData";

const Spaces = () => {
  return (
    <div>
      <Header hight={85} data={spaceData} />
      <Rooms />
      <WhyChoiceUs />
    </div>
  );
};

export default Spaces;
