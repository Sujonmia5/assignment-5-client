import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const TestimonalCard = () => {
  return (
    <div className="w-80 h-[352px] rounded-lg shadow-2xl shadow-primary-light p-6 relative text-center flex flex-col justify-between group mx-auto">
      {/* Quotation Icon */}
      <div className="absolute top-4 left-4 text-primary-light text-7xl font-bold">
        &ldquo;
      </div>

      {/* Testimonial Text */}
      <p className="text-info text-sm mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        consequat, sapien vitae congue fringilla, sem eros consequat tellus,
        quis volutpat leo enim.
      </p>

      <div className="bg-primary-light rounded-b-lg -mx-6 -mb-6 p-6 relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-20 h-20 group-hover:scale-125 transition-all duration-500  rounded-full border-4 border-white"
          />
        </div>

        {/* Name */}
        <h4 className="text-white text-lg font-exo font-semibold mt-10">
          Lance Jarvis
        </h4>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-2 ">
          <a href="#" className="hover:text-gray-200">
            <FaFacebook className="size-6 " />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaTwitter className="size-6 text-blue-600" />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaLinkedinIn className="size-6 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonalCard;
