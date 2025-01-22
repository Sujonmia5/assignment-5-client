import { Button } from "antd";

const Error = () => {
  return (
    <div className="h-screen bg-header-bg bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center ">
      <div className="text-center">
        <div className="relative">
          <svg
            aria-hidden="true"
            className="size-8 absolute top-0 right-10 "
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
          </svg>
          <span className="text-[250px] font-exo font-bold leading-none">
            404
          </span>
        </div>
        <h1 className="text-2xl font-exo font-medium text-white">
          Oops! Something went wrong
        </h1>
      </div>

      <div className="flex justify-center items-center gap-x-5 py-10">
        <a href="/">
          <Button
            color="primary"
            variant="solid"
            className="w-[200px] h-[60px] text-white font-bold rounded-md hover:bg-primary-dark transition duration-300"
          >
            Go Back Home
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Error;
