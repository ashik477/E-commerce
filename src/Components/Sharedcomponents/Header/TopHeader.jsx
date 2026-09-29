import { BiSolidPhoneCall } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";

const TopHeader = () => {
  return (
     <div className="bg-[#F8F8FB] py-2 ">

            <div className="flex flex-wrap justify-between items-center container mx-auto px-10 sm:px-8 md:px-14 lg:px-24 ">
                <div className="flex items-center gap-4 sm:gap-8 md:gap-18 ct ">
                    <div className="flex items-center gap-2">
                        < BiSolidPhoneCall  />
                        <p className="text-[12px] ct ">01797214145</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <RiWhatsappFill />
                        <p className="text-[12px] ">01968258157</p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <p className="text-[12px] ct">World's Fastest Online Shopping Destination</p>
                </div>
                <div className="hidden md:flex items-center ct text-[12px] gap-5">
                    <p>Help?</p>
                    <p>Trac Order?</p>
                    <p>English</p>
                    <p>Contact Us</p>
                </div>
            </div>

        </div>
  );
};
export default TopHeader;
