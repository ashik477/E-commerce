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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  mt-12 justify-center">
                {
                    products.slice(-5).map(p => <ProductCard product={p}></ProductCard>)
                }
            </div>
        </div>

      </div>
    </div>
  );
};

export default NewProducts;
