
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";


const ProductCard = ({product}) => {
    return (
        <div>
            <div className="w-62 overflow-hidden h-90 flex flex-col justify-center border border-gray-200 rounded-md items-center">
                <img className="w-72 cursor-pointer hover:scale-110  tranasition-all duration-500" src={product.image} alt="" />
                <Link to ={`/shop/${product.id}`}>
                <div className="p-3 pl-5">
                    <p className="text-gray-400">{product.categoryName}</p>
                    <h3 className="font-semibold">{product.name}</h3>
                    
                    <div className="flex  gap-3">
                        <p className="cp flex items-center">{product.price} <TbCurrencyTaka /></p>
                        <p className="line-through flex items-center text-gray-400">{product.mrp}<TbCurrencyTaka /></p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;