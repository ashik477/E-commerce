import cover from "../../../assets/image/bg-my-photo.png";
const LatestExclusive = () => {
  return (
    <div className="py-14 ">
      <div
        className="h-[80vh] container mx-auto px-24 rounded-md bg-cover "
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="text-white flex justify-center h-full gap-4 flex-col items-end text-end ">
          <p className="text-4xl font-semibold">30% off sale</p>
          <h3 className="text-5xl font-semibold">
            Latest Exclusive <br />
            Summer Collection
          </h3>
          <button className="bgp px-5 py-2 rounded-md text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestExclusive;
