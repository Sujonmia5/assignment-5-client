export type TAchievement = {
  title: string;
  total: number;
};

export type TRoom = {
  _id: string;
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  roomImgUrl: string[];
  amenities: string[];
  isDeleted: boolean;
};
