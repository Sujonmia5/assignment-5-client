import {
  Button,
  Collapse,
  GetProps,
  Input,
  Radio,
  RadioChangeEvent,
  Select,
} from "antd";
import RoomCard from "../roomCard/roomCard";
import { MdClear, MdExpandMore } from "react-icons/md";
import { TRoom } from "../../../types/utils";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaUserGroup, FaUsers } from "react-icons/fa6";

type SearchProps = GetProps<typeof Input.Search>;

interface RoomsProps {
  data: TRoom[] | [];
}
const Rooms = ({ data }: RoomsProps) => {
  const [limit, setLimit] = useState<number>(10);
  const [sort, setSort] = useState<number | null>(null);

  const { Search } = Input;
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
  };

  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  };

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const filterData = [
    {
      id: 1,
      name: "0 - 10",
    },
    {
      id: 1,
      name: "10 - 20",
    },
    {
      id: 1,
      name: "20 - 30",
    },
    {
      id: 1,
      name: "30 - 40",
    },
    {},
  ];
  return (
    <div className="py-10 px-12 space-y-5">
      <div className="w-full flex justify-between bg-gray-200 p-5 rounded-xl">
        <div>
          <h2 className="text-3xl font-exo font-semibold text-info">
            Our Rooms
          </h2>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <Button
              classNames={{
                icon: "absolute right-2",
              }}
              className="w-28 bg-primary-light "
              type="primary"
              icon={<MdClear />}
            >
              Reset All
            </Button>
          </div>
          {/*Limit Data*/}
          <Select
            defaultValue="Show"
            style={{ width: 120 }}
            value={limit.toString()}
            onChange={(value) => {
              setLimit(parseInt(value));
            }}
            options={[
              { value: "10", label: "10" },
              { value: "15", label: "15" },
              { value: "20", label: "20" },
            ]}
          />

          {/* sort */}
          <Select
            defaultValue="Sort By"
            style={{ width: 150 }}
            onChange={(value) => {
              setSort(parseInt(value));
            }}
            options={[
              { value: "1", label: "Price ( Low > High)" },
              { value: "-1", label: "Price ( High > Low)" },
            ]}
          />
          {/* search */}
          <div>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-5 ">
        <div className="col-span-2 bg-gray-200 shadow-2xl shadow-primary-light rounded-2xl h-screen">
          <h2 className="text-xl py-2 pl-4 font-exo font-semibold text-info">
            Filters
          </h2>
          <Collapse
            collapsible="header"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label: "Filter by capacity",
                children: (
                  <div>
                    <Radio.Group
                      style={style}
                      onChange={onChange}
                      value={value}
                      className="hover:text-primary-light"
                      options={Array.from({ length: 5 }).map((_, i) => ({
                        value: i + 1,
                        label: (
                          <>
                            <div
                              key={i}
                              className="flex items-center justify-center gap-2 w-ful h-fit"
                            >
                              <FaUserGroup className="size-4" />
                              <span className="text-base font-exo font-medium">
                                {i + 1 !== 5
                                  ? `${i === 0 ? 0 : i * 10} - ${(i + 1) * 10}`
                                  : "50+"}
                              </span>
                            </div>
                          </>
                        ),
                      }))}
                    />
                  </div>
                ),
              },
            ]}
            expandIconPosition="end"
            bordered={false}
          />
        </div>
        <div className="col-span-10 grid grid-cols-2 gap-5">
          {data &&
            data.map((room, index) => <RoomCard room={room} key={index} />)}
          <div className="flex justify-end">
            <div className="join">
              <button className="join-item btn">«</button>
              <button className="join-item btn">Page 22</button>
              <button className="join-item btn">»</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
