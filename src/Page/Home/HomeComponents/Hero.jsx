import bg from "../../../assets/image/Hero-cover.jpg";

const Hero = () => {
  return (
    <div>
          <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-[80vh] bg-cover bg-center px-24 mx-auto my-10 container"
    >
      <div className="flex flex-col justify-center h-full items-start gap-3">
        <h3 className="cp text-2xl font semibold">70% Off For This Winter</h3>
        <h1 className="text-5xl font-semibold ct">Bigest Sale For Winter<br/>Man & Woman</h1>
        <button className="btn bgp text-gray-100">Shop Now</button>

      </div>
    </div>
    </div>
  );
};

export default Hero;
