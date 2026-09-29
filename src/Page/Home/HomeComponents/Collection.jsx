import img01 from "../../../assets/image/12.jpg"
import img02 from "../../../assets/image/13.jpg"
import img03 from "../../../assets/image/14.jpg"
import {Link} from 'react-router-dom'
const Collection = () => {
    return (
        <div>
            <div className="container mx-auto px-24 flex justify-between my-24">
                <div className="flex flex-col w-107 px-8 py-7 items-end" style ={{background :`url(${img01})`}}>
                    <h3 className="text-end text-white text-4xl font-semibold">Women's <br/>Collection</h3>
                    <Link to ="/shop"><button className="btn shadow-none bgp"> Shop Now</button></Link>
                </div>
                <div className="flex flex-col w-107 px-8 py-7 items-end" style ={{background :`url(${img02})`}}>
                    <h3 className="text-end text-white text-4xl font-semibold">Children's <br/>Collection</h3>
                    <Link to ="/shop"><button className="btn shadow-none bgp"> Shop Now</button></Link>
                </div>
                <div className="flex flex-col w-107 px-8 py-7 items-end" style ={{background :`url(${img03})`}}>
                    <h3 className="text-end text-white text-4xl font-semibold">Men's <br/>Collection</h3>
                    <Link to ="/shop"><button className="btn shadow-none bgp"> Shop Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Collection;