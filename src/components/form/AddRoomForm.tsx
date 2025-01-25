import { useForm, Controller } from "react-hook-form";
import { Form, Input, InputNumber, Button, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Option } from "antd/es/mentions";

const AddRoomForm = () => {
  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log("Room Data:", data);
  };
  return (
    <div className="w-2/3 mx-auto min-h-screen relative">
      <Form
        layout="vertical"
        onFinish={handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-x-5 "
      >
        <Form.Item
          className="col-span-12"
          label="Room Name"
          validateStatus={errors.name ? "error" : ""}
          //   help={errors?.name?.message}
        >
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "Room name is required" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter room name"
                className="h-12 text-base"
                classNames={{}}
              />
            )}
          />
        </Form.Item>

        <Form.Item
          className="col-span-6"
          label="Room Number"
          validateStatus={errors.roomNo ? "error" : ""}
          //   help={errors.roomNo?.message}
        >
          <Controller
            name="roomNo"
            control={control}
            defaultValue={0}
            rules={{ required: "Room number is required" }}
            render={({ field }) => (
              <InputNumber
                {...field}
                min={0}
                style={{ width: "100%" }}
                placeholder="Enter room number"
              />
            )}
          />
        </Form.Item>

        <Form.Item
          className="col-span-6"
          label="Floor Number"
          validateStatus={errors.floorNo ? "error" : ""}
          //   help={errors.floorNo?.message}
        >
          <Controller
            name="floorNo"
            control={control}
            defaultValue={0}
            rules={{ required: "Floor number is required" }}
            render={({ field }) => (
              <InputNumber
                {...field}
                min={0}
                style={{ width: "100%" }}
                placeholder="Enter floor number"
              />
            )}
          />
        </Form.Item>

        <Form.Item
          className="col-span-6"
          label="Capacity"
          validateStatus={errors.capacity ? "error" : ""}
          //   help={errors.capacity?.message}
        >
          <Controller
            name="capacity"
            control={control}
            defaultValue={0}
            rules={{ required: "Capacity is required" }}
            render={({ field }) => (
              <InputNumber
                {...field}
                min={0}
                style={{ width: "100%" }}
                placeholder="Enter capacity"
              />
            )}
          />
        </Form.Item>

        <Form.Item
          className="col-span-6"
          label="Price Per Slot"
          validateStatus={errors.pricePerSlot ? "error" : ""}
          //   help={errors.pricePerSlot?.message}
        >
          <Controller
            name="pricePerSlot"
            control={control}
            defaultValue={0}
            rules={{ required: "Price per slot is required" }}
            render={({ field }) => (
              <InputNumber
                {...field}
                min={0}
                style={{ width: "100%" }}
                placeholder="Enter price per slot"
              />
            )}
          />
        </Form.Item>

        <Form.Item
          className="col-span-6"
          label="Amenities"
          validateStatus={errors.amenities ? "error" : ""}
          //   help={errors.amenities?.message}
        >
          <Controller
            name="amenities"
            control={control}
            defaultValue={[]}
            rules={{ required: "Select at least one amenity" }}
            render={({ field }) => (
              <Select
                {...field}
                mode="multiple"
                placeholder="Select amenities"
                style={{ width: "100%" }}
              >
                <Option value="WiFi">WiFi</Option>
                <Option value="TV">TV</Option>
                <Option value="AC">AC</Option>
                <Option value="Heater">Heater</Option>
                <Option value="Parking">Parking</Option>
              </Select>
            )}
          />
        </Form.Item>

        <Form.Item
          className="col-start-1 col-span-6"
          label="Room Images"
          validateStatus={errors.roomImgUrl ? "error" : ""}
          //   help={errors.roomImgUrl?.message}
        >
          <Controller
            name="roomImgUrl"
            control={control}
            defaultValue={[]}
            rules={{ required: "At least one image is required" }}
            render={({ field }) => (
              <Upload
                {...field}
                listType="picture"
                beforeUpload={() => false} // Prevents automatic upload
              >
                <Button icon={<UploadOutlined />}>Upload Room Images</Button>
              </Upload>
            )}
          />
        </Form.Item>

        <Form.Item className="absolute -top-9 -right-48">
          <Button type="primary" htmlType="submit">
            Add Room
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddRoomForm;
