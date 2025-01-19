import Advertisement from "../components/component/advertisement/advertisement";
import Features from "../components/component/features/features";
import Header from "../components/component/header/header";
import WhyChoiceUs from "../components/component/hero/hero";

import Marque from "../components/component/marque/marque";

const Home = () => {
  return (
    <div className="over">
      <Header />
      <Marque />
      <Advertisement />
      <Features />
      <WhyChoiceUs />
    </div>
  );
};

export default Home;
