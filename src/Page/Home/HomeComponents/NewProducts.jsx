import useData from "../../../Hooks/useData"
import SectionHeading from "../../../Components/Sharedcomponents/SectionHeading"
import ProductCard from "../../../Components/SharedComponents/ProductCard";
const NewProducts = () => {
    const {products} = useData()
  return (
    <div>
      <div className="container mx-auto px-24">
        <div>
          <SectionHeading
            description={"Don't wait. The time will never be just right."}
            heading={"Day of"}
            colorHeading={"The deal"}
          ></SectionHeading>
        </div>
        <div>
            <div className="flex gap-4 flex-wrap mt-12 justify-center">
                {
                    products.slice(-4).map(p => <ProductCard product={p}></ProductCard>)
                }
            </div>
        </div>

      </div>
    </div>
  );
};

export default NewProducts;
