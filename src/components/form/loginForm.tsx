import { Button, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import { useLoginUserMutation } from "../../redux/api/userAPI";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/feature/userSlice";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}
const LoginFrom = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispacth = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await loginUser(data);
      localStorage.setItem("token", res?.data?.token);
      const user = {
        email: res?.data?.data?.email,
        role: res?.data?.data?.role,
        token: res?.data?.token,
      };
      dispacth(setUser(user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-12 h-full flex flex-col items-center  justify-center"
    >
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
          <Controller
            name="email"
            control={control}
            rules={{ required: "email is required" }}
            render={({ field }) => (
              <Input
                {...field}
                size="large"
                placeholder="Enter your email address"
                prefix={<HiOutlineMail />}
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors?.email?.message}
            </p>
          )}
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
          <Controller
            name="password"
            control={control}
            rules={{ required: "password is required" }}
            render={({ field }) => (
              <Input.Password
                {...field}
                size="large"
                placeholder="Enter your password"
                prefix={<HiOutlineMail />}
              />
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors?.password?.message}
            </p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <Button
            type="primary"
            variant="filled"
            htmlType="submit"
            loading={isLoading}
            className="w-full px-8 py-3 font-semibold rounded-md dark:text-gray-50"
          >
            Sign in
          </Button>
        </div>
        <p className="px-6 text-sm text-center dark:text-gray-600">
          Don't have an account yet?{" "}
          <a
            rel="noopener noreferrer"
            href="/signup"
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
