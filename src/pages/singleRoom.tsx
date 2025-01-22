import { useParams } from "react-router-dom";
import { useGetRoomByIdQuery } from "../redux/api/roomAPI";
import Spinner from "../components/ui/spinner/spinner";
import bgImage from "../assets/image/background-1-1.png";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineNumbers } from "react-icons/md";
import { Button } from "antd";

const SingleRoom = () => {
  const params = useParams();
  console.log(params);
  const { data, isLoading } = useGetRoomByIdQuery(params?.id);
  if (isLoading) return <Spinner />;
  const {
    name,
    roomImgUrl,
    pricePerSlot,
    floorNo,
    capacity,
    amenities,
    roomNo,
  } = data.data;

  return (
    <div className="min-h-screen -mt-32 relative">
      {/* <Header data={name} hight={85} /> */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[400px] w-full "
      >
        <div className="text-center w-full pt-48">
          <h1 className="text-6xl font-exo font-medium text-white">{name}</h1>
        </div>
        <div className="text-center my-5 flex justify-center items-center gap-5">
          <h1 className="text-xl font-exo font-medium text-white/80 flex items-center gap-x-2">
            <MdOutlineNumbers className="size-6" /> Floor:{" "}
            <span className="text-red-500">{floorNo}</span>
          </h1>
          <span className="inline-block w-[2px] h-6 bg-white"></span>
          <h1 className="text-xl font-exo font-medium text-white/80 flex items-center gap-x-2">
            <MdOutlineNumbers className="size-6" /> RoomNo:{" "}
            <span className="text-red-500">{roomNo}</span>
          </h1>
          <span className="inline-block w-[2px] h-6 bg-white"></span>
          <h1 className="text-xl font-exo font-medium text-white/80 flex items-center gap-x-2">
            <FaUserFriends className="size-6" /> Capacity:{" "}
            <span className="text-red-500">{capacity}</span>
          </h1>
        </div>
        <h1 className="text-3xl font-exo font-medium text-white text-center">
          More Facilitices
        </h1>
      </div>
      <div>
        <div className="flex relative flex-col justify-center bg-gray-300 items-center gap-x-5 px-20">
          <div className="absolute -top-16 w-full h-fit my-5 flex items-center justify-center gap-x-10">
            {amenities.map((amenity: string, index: number) => (
              <div
                key={index}
                className=" text-white/80 text-xl py-2 px-5 rounded-md"
              >
                {amenity}
              </div>
            ))}
          </div>
          <div className="w-10/12 h-fit">
            <div className="flex gap-x-2">
              <figure>
                <img
                  src={roomImgUrl[0]}
                  alt={name}
                  className="h-96 w-full object-cover object-center"
                />
              </figure>
              <figure>
                <img
                  src={roomImgUrl[1]}
                  alt={name}
                  className="h-96 w-full object-cover object-center"
                />
              </figure>
            </div>
          </div>
          <div className="w-full flex justify-around items-center mt-10">
            <div className="flex items-center justify-center gap-x-2">
              <h2 className="text-xl font-exo font-medium text-info">
                Price per Slot:
              </h2>
              <p className="text-2xl font-exo font-semibold text-primary-light text-center">
                {pricePerSlot} USD
              </p>
            </div>
            <div>
              <Button type="primary" size="large">
                Book Now
              </Button>
            </div>
          </div>
          <div className=" relative mt-10">
            <h2 className="absolute left-0 text-3xl font-exo font-medium text-info text-center">
              Description:
            </h2>
            <p className="text-base font-exo text-info text-justify my-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              nihil magni, modi animi fuga consequatur. Quis veniam nam quaerat
              recusandae eos, modi assumenda ad doloremque, dolorum maxime atque
              consequuntur expedita, consequatur reiciendis tempora. Inventore
              suscipit ea laudantium molestiae consectetur distinctio culpa,
              vitae quia quidem! Quibusdam sequi voluptates error, earum numquam
              quam exercitationem omnis architecto inventore asperiores expedita
              unde, delectus assumenda consectetur molestias eaque! Voluptates
              tempora et exercitationem autem tenetur, asperiores explicabo
              fugit consequatur impedit voluptate maiores cum distinctio? Ipsa
              tempora adipisci quae aliquam, aspernatur eius quaerat nostrum
              consequuntur totam, itaque explicabo beatae sapiente vel saepe ad
              eum placeat perferendis quod quia quo ex, rem dicta. Rem, iste
              nesciunt enim eaque minus in recusandae deleniti perspiciatis
              libero non. Dolore iure amet, consequuntur aspernatur ipsa id
              ullam quod similique odio molestiae veritatis itaque optio magnam
              hic. Repellendus eos cupiditate voluptate, placeat totam ullam
              aperiam minus amet sequi provident debitis quod sunt nam a aliquam
              magni officia. Ratione suscipit nihil quas dolorum a ex assumenda
              modi fugiat doloremque recusandae tempora rem, cupiditate
              eligendi! Commodi minus laboriosam esse eos deleniti omnis eum,
              voluptates fugiat inventore, maxime culpa velit, sit reiciendis
              reprehenderit repudiandae! Molestias, maxime consequatur.
              Assumenda sit animi, ut qui eos aspernatur cumque maxime delectus
              iste explicabo voluptas corporis eveniet magni consequatur modi,
              expedita at pariatur ad ab magnam! Officia vitae sed nisi
              distinctio sint, nemo laboriosam deleniti cupiditate est! Debitis
              perferendis est, molestiae aut itaque veritatis quam in impedit
              omnis incidunt accusamus vel repudiandae! Deserunt, facere!
              Mollitia nostrum et earum nemo tenetur provident, quis possimus
              ratione recusandae sapiente. Unde deserunt ex dolore asperiores
              consectetur error blanditiis corporis ullam. Omnis necessitatibus
              quo, quia praesentium aspernatur harum incidunt suscipit laborum,
              quisquam placeat sit, saepe temporibus distinctio expedita
              similique atque vero libero et quae rerum odit perspiciatis
              delectus laudantium. Beatae, rerum qui ullam deleniti consequuntur
              quaerat, facere labore provident ad officia eligendi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoom;
