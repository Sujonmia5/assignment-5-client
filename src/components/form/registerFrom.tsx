import { Button, Input } from "antd";
import { HiOutlineMail } from "react-icons/hi";

const RegisterFrom = () => {
  return (
    <form
      action=""
      className="container w-full h-full items-center justify-center flex flex-col mx-auto space-y-12"
    >
      <fieldset className="p-6 rounded-md shadow-sm text-center">
        <div className="col-span-full lg:col-span-1 my-5">
          <p className="font-bold font-exo text-4xl">Register account</p>
        </div>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="block mb-2 text-sm">
              First name
            </label>
            <Input
              size="large"
              placeholder="Enter your first name"
              prefix={<HiOutlineMail />}
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="block mb-2 text-sm">
              Last name
            </label>
            <Input
              size="large"
              placeholder="Enter your Last name"
              prefix={<HiOutlineMail />}
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="email" className="block mb-2 text-sm">
              Email Address
            </label>
            <Input
              size="large"
              placeholder="Enter your email address"
              prefix={<HiOutlineMail />}
            />
          </div>
          <div className="col-span-full ">
            <label htmlFor="email" className="block mb-2 text-sm">
              Password
            </label>
            <Input.Password size="large" placeholder="Enter your Password" />
          </div>
          <div className="col-span-full">
            <label htmlFor="email" className="block mb-2 text-sm">
              Confrom password
            </label>
            <Input.Password size="large" placeholder="Enter your Password" />
          </div>
        </div>
        <div className="flex justify-center items-center w-full my-10">
          <Button type="primary" size="large" block>
            Register
          </Button>
        </div>
      </fieldset>
    </form>
  );
};

export default RegisterFrom;
