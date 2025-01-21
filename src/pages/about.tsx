import Creativity from "../components/component/creativity/creativity";
import Marque from "../components/component/marque/marque";
import TeamMember from "../components/component/teamMember/teamMember";
import Achievement from "../components/ui/achievement/achievement";
import Header from "../components/ui/header/header";
import Hero from "../components/ui/hero/hero";
import { aboutData } from "../utils/utilsData";

const About = () => {
  return (
    <>
      <Header hight={85} data={aboutData} />
      <div className="px-12">
        <Marque />
        <Hero />
        <Achievement />
        <TeamMember />
        <Creativity />
      </div>
    </>
  );
};

export default About;
