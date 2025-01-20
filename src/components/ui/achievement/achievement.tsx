import { achievementData } from "../../../utils/utilsData";
import vediolayout from "../../../assets/image/diverse-female.jpg";
import { Divider } from "antd";

const Achievement = ({ margin }: { margin?: string }) => {
  return (
    <div
      style={{
        marginTop: `-${margin}px`,
      }}
      className={`max-w-7xl bg-primary-light mx-auto h-96 overflow-hidden p-6 rounded-[40px] mb-10`}
    >
      <div className="flex w-full h-full overflow-hidden rounded-2xl ">
        <div className="w-full h-full rounded-2xl">
          <img
            className="w-11/12 h-[336px] object-cover object-center rounded-2xl"
            src={vediolayout}
            alt=""
          />
        </div>
        <div className="w-96">
          {achievementData.map(({ title, total }, i) => (
            <>
              <div
                key={i}
                className="flex flex-col items-start gap-x-3 text-xl font-medium font-exo"
              >
                <p className="text-5xl text-white">
                  {total}
                  {i === 0 ? "k+" : "+"}
                </p>
                <p className="text-xl text-white">{title}</p>
              </div>
              {i !== 2 && <Divider className="bg-white" />}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
