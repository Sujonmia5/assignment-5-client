import loginImage from "../assets/image/1-1-e1735202815310.jpg";
import RegisterFrom from "../components/form/registerFrom";
const Register = () => {
  return (
    <div className="bg-header-bg w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center text-white">
      <div className="w-full h-full grid grid-cols-12">
        <div className="col-span-6 bg-primary-light">
          <div className="w-full h-full relative">
            <img
              className="w-full h-full object-cover object-center"
              src={loginImage}
              alt=""
            />
            <div className="bg-black/40 w-full h-full absolute top-0 left-0"></div>
          </div>
        </div>
        <div className="col-span-6 text-white">
          <RegisterFrom />
        </div>
      </div>
    </div>
  );
};

export default Register;
