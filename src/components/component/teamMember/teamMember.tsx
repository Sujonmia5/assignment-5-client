import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaTwitter } from "react-icons/fa6";

const TeamMember = () => {
  const teamMembers = [
    {
      name: "Guptam Holla",
      image: "http://www.webcoderskull.com/img/team4.png",
      link: "http://www.webcoderskull.com/",
      description: "Hofstra University School of Law Hempstead, New York",
    },
    {
      name: "Kappua Billa",
      image: "http://www.webcoderskull.com/img/team1.png",
      link: "#",
      description: "Hofstra University School of Law Hempstead, New York",
    },
    {
      name: "Omin Goshu",
      image: "http://www.webcoderskull.com/img/team4.png",
      link: "http://www.webcoderskull.com/",
      description: "Hofstra University School of Law Hempstead, New York",
    },
    {
      name: "NArman Bandhu",
      image: "http://www.webcoderskull.com/img/team2.png",
      link: "http://www.webcoderskull.com/",
      description: "Hofstra University School of Law Hempstead, New York",
    },
  ];

  return (
    <div className="container">
      <div className="">
        <h2 className="text-info text-6xl font-semibold text-center font-exo">
          Our Team Members
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-5 my-10 text-info">
        {teamMembers.map((member, index) => (
          <div
            className=" col-span-full md:col-span-3 border-2 rounded-lg w-full h-96 hover:border-primary-light transition-all duration-500 relative group overflow-hidden"
            key={index}
          >
            <div className="w-full h-full">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={member.image}
                alt={member.name}
              />
            </div>

            <div className="absolute group-hover:top-0 top-full left-0 h-full w-full rounded-lg bg-primary-light/50 flex flex-col justify-center items-center px-5 text-center transition-all duration-500">
              <h3 className="text-4xl font-exo font-bold text-info">
                {member.name}
              </h3>
              <p className="text-info/70 text-lg">{member.description}</p>
              <ul className="absolute bottom-5 w-full flex items-center justify-center gap-5">
                <li className="bg-white size-10 flex items-center justify-center rounded-lg">
                  <a href="#">
                    <FaFacebook className="size-8 text-blue-600" />
                  </a>
                </li>
                <li className="bg-white size-10 flex items-center justify-center rounded-lg">
                  <a href="#">
                    <FaTwitter className="size-8 text-blue-600" />
                  </a>
                </li>
                <li className="bg-white size-10 flex items-center justify-center rounded-lg">
                  <a href="#">
                    <FaLinkedin className="size-8 text-blue-600" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
