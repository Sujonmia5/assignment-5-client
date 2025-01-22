import Advertisement from "../components/component/advertisement/advertisement";
import Features from "../components/component/features/features";
import HeaderContent from "../components/component/header/header";
import WhyChoiceUs from "../components/component/hero/hero";
import Marque from "../components/component/marque/marque";
import Achievement from "../components/ui/achievement/achievement";
import Header from "../components/ui/header/header";
import { useGetRoomsQuery } from "../redux/api/roomAPI";
import Spinner from "../components/ui/spinner/spinner";
import Testimonal from "../components/component/testimonal/testimonal";

const Home = () => {
  const { data = [], isLoading } = useGetRoomsQuery({ limit: 4 });

  if (isLoading) return <Spinner />;
  return (
    <div className="relative">
      {/* <Spinner /> */}
      <Header hight={120} />
      <div className=" absolute z-10 top-5 left-0 bg-transparent">
        <HeaderContent />
      </div>
      <Achievement margin="160" />
      <Marque margin="mb-20" />
      <Advertisement />
      <Features data={data.data} />
      <WhyChoiceUs />
      <Testimonal />
    </div>
  );
};

export default Home;
