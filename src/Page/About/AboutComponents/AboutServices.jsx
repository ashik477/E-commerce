import SectionHeading from "../../../Components/Sharedcomponents/SectionHeading";
import Support from "../../Home/HomeComponents/Support"
const AboutServices = () => {
    return (
        <div className="my-22">
            <div className="flex justify-center text-center md-4">
                <SectionHeading heading ={"Our"} colorHeading={"Services"} descripsion={"Customar service should not be a department. It sould be the entire company."}></SectionHeading>
            </div>
            <Support></Support>

        </div>
    );
};

export default AboutServices;