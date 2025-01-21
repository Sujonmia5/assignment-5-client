import Advertisement from "../components/component/advertisement/advertisement";
import Features from "../components/component/features/features";
import HeaderContent from "../components/component/header/header";
// import Header from "../components/component/header/header";
import WhyChoiceUs from "../components/component/hero/hero";

import Marque from "../components/component/marque/marque";
import Achievement from "../components/ui/achievement/achievement";
import Header from "../components/ui/header/header";
import { useAppSelector } from "../redux/hooks";

const Home = () => {
  const data = useAppSelector((state) => state.user.user);
  console.log(data);

  return (
    <div className="relative">
      <Header hight={120} />
      <div className=" absolute z-10 top-5 left-0 bg-transparent">
        <HeaderContent />
      </div>
      <Achievement margin="160" />
      <Marque margin="mb-20" />
      <Advertisement />
      <Features />
      <WhyChoiceUs />
    </div>
  );
};

export default Home;
