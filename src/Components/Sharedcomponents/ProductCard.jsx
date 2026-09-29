import { IoIosStar } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";


const ProductCard = ({product}) => {
    return (
        <div>
            <div className="w-74 flex flex-col justify-center border border-gray-200 rounded-md items-center">
                <img className="w-72" src={product.image} alt="" />
                <div className="p-3 pl-5">
                    <p className="text-gray-400">{product.categoryName}</p>
                    <h3 className="font-semibold">{product.name}</h3>
                    <div className="flex gap-1 text-xl text-orange-500">
                       <IoIosStar />
                       <IoIosStar />
                       <IoIosStar />
                       <IoIosStar />
                       <IoIosStar /> 
                    </div>
                    <div className="flex  gap-3">
                        <p className="cp flex items-center">{product.price} <TbCurrencyTaka /></p>
                        <p className="line-through flex items-center text-gray-400">{product.mrp}<TbCurrencyTaka /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;