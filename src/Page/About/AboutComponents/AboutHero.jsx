import img1 from "../../../assets/image/about.png";
import img2 from "../../../assets/image/about-2.png";
import img3 from "../../../assets/image/about-3.png";
import SectionHeading from "../../../Components/Sharedcomponents/SectionHeading";

const AboutHero = () => {
  return (
    <div className="container mx-auto px-24 my-12">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 flex-1">
          <img className=" w-81 rounded-md" src={img1} alt="" />
          <div className="flex flex-col gap-4">
            <img className=" w-84 rounded-md" src={img2} alt="" />
            <img className=" w-84 rounded-md" src={img3} alt="" />
          </div>
        </div>
        <div className="flex-1">
          <SectionHeading
            heading={"who"}
            colorHeading={"We Are?"}
          ></SectionHeading>
          <h3 className="uppercase text-xl font-semibold my-4 text-gray-600">
            We’re here to serve only the best products for you. Enriching your
            homes with the best essentials.
          </h3>
          <p className="tp">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            a eos temporibus vero aut sequi illo ea, dolorem similique modi
            alias! Vitae eveniet voluptatibus pariatur, maxime alias dolores,
            minima nisi expedita tenetur laboriosam nulla quibusdam autem magnam
            placeat dolore totam molestias modi.<br/>
            Quaerat iusto incidunt quisquam
            enim optio voluptatibus corporis vero autem. Quod maxime quos non
            inventore ipsa nulla, iusto ratione rem enim necessitatibus cum
            dolorum est officiis adipisci esse sint reprehenderit, vel iste
            laboriosam iure minus eligendi.<br/>
             Suscipit provident voluptatibus illo
            voluptates odio? Fugit consequuntur ad illo excepturi officia,
            quidem mollitia quod delectus officiis tempore, quaerat quia aut
            voluptas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
