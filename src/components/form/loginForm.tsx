import { Button, Input } from "antd";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

const LoginFrom = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <form className="w-full space-y-12 h-full flex flex-col items-center  justify-center">
      <div className="my-5">
        <h4 className="text-5xl font-exo font-medium">
          Log in to access all <br /> our services
        </h4>
      </div>
      <div className="space-y-4 w-1/2">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Email address
          </label>
          <Input
            size="large"
            placeholder="Enter your email address"
            prefix={<HiOutlineMail />}
          />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xs hover:underline dark:text-gray-600"
            >
              Forgot password?
            </a>
          </div>
          <Input.Password
            placeholder="input password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <Button
            type="primary"
            variant="filled"
            className="w-full px-8 py-3 font-semibold rounded-md dark:text-gray-50"
          >
            Sign in
          </Button>
        </div>
        <p className="px-6 text-sm text-center dark:text-gray-600">
          Don't have an account yet?{" "}
          <a
            rel="noopener noreferrer"
            href="#"
            className="hover:underline dark:text-primary-light"
          >
            Sign up
          </a>
          .
        </p>
      </div>
    </form>
  );
};

export default LoginFrom;
