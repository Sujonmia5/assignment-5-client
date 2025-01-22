import { Flex, Spin } from "antd";

const Spinner = () => {
  const contentStyle: React.CSSProperties = {
    padding: 50,
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: 4,
    fontSize: 112,
  };
  const content = <div style={contentStyle} />;
  return (
    <div className="w-full min-h-screen overflow-y-hidden fixed top-0 left-0 bg-white z-[999] flex items-center justify-center overflow-x-hidden ">
      <Flex>
        <Spin className="" tip="Loading.." size="large">
          {content}
        </Spin>
      </Flex>
    </div>
  );
};

export default Spinner;
