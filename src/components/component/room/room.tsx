import { Button, GetProps, Input, Select } from "antd";
import RoomCard from "../roomCard/roomCard";
import { MdClear } from "react-icons/md";

type SearchProps = GetProps<typeof Input.Search>;
const Rooms = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const { Search } = Input;
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
  };
  return (
    <div className="py-10 px-12 space-y-5">
      <div className="w-full flex justify-between">
        <div>
          <h2 className="text-lg font-exo font-semibold text-info">Rooms</h2>
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
          {/* filter */}
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />

          {/* sort */}
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
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
      <div className="grid grid-cols-2 gap-5">
        {Array.from({ length: 8 }).map((_, index) => (
          <RoomCard room={{}} key={index} />
        ))}
        <div className="flex justify-end">
          <div className="join">
            <button className="join-item btn">«</button>
            <button className="join-item btn">Page 22</button>
            <button className="join-item btn">»</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
