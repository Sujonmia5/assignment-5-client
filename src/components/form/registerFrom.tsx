/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import { useRegisterUserMutation } from "../../redux/api/userAPI";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  password: string;
}

const RegisterForm = () => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await registerUser(data).unwrap();
      toast.success("Account created Successfully!");
      if (res.success && res.statusCode === 200) {
        navigate(`/login`, { replace: true });
      }
    } catch (error: any) {
      const data = error.data;
      if (data?.message) {
        toast.error(data?.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container w-full h-full items-center justify-center flex flex-col mx-auto space-y-12"
    >
      <fieldset className="p-6 rounded-md shadow-sm text-start">
        <div className="col-span-full lg:col-span-1 my-5">
          <p className="font-bold font-exo text-4xl">Register account</p>
        </div>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  size="large"
                  placeholder="Enter your name"
                  prefix={<HiOutlineMail />}
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastName" className="block mb-2 text-sm">
              Phone
            </label>
            <Controller
              name="phone"
              control={control}
              rules={{ required: "Phone number is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  size="large"
                  placeholder="Enter your phone number"
                  prefix={<HiOutlineMail />}
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="col-span-full">
            <label htmlFor="email" className="block mb-2 text-sm">
              Email Address
            </label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              }}
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
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="col-span-full">
            <label htmlFor="confirm_password" className="block mb-2 text-sm">
              Address
            </label>
            <Controller
              name="address"
              control={control}
              rules={{
                required: "address is required",
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  size="large"
                  placeholder="Enter your address"
                />
              )}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors?.address?.message}
              </p>
            )}
          </div>
          <div className="col-span-full">
            <label htmlFor="password" className="block mb-2 text-sm">
              Password
            </label>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  size="large"
                  placeholder="Enter your password"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center w-full my-10">
          <Button
            loading={isLoading}
            type="primary"
            htmlType="submit"
            size="large"
          >
            Register
          </Button>
        </div>
        <p className="px-6 text-sm text-center dark:text-gray-600">
          Already have an account.{" "}
          <a
            rel="noopener noreferrer"
            href="/login"
            className="hover:underline dark:text-primary-light"
          >
            Log in
          </a>
        </p>
      </fieldset>
    </form>
  );
};

export default RegisterForm;
