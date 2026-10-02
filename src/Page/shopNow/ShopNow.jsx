import { useState } from 'react';
import useData from '../../Hooks/useData';
import ProductCard from '../../Components/SharedComponents/ProductCard';


const ShopNow = () => {
    const { products, categorys } = useData();
    const { Id, setId } = useState(null);
    const [width, setWidth] = useState(null);


    const handleClick = (categoryId) => {
        setId(prev => prev === categoryId ? null : categoryId); // toggle
    };


    const handleClickIdth = (w) => {
        setWidth(prev => prev === w ? null : w); // toggle
    };


    const clearFilter = () => {
        setId(null);
        setWidth(null);
    };


    const filterData = products.filter(p => {
        const matchCategory = Id ? p.categoryId === Id : products;
        const matchWidth = width ? p.width === width : products;
        return matchCategory && matchWidth;
    });

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8 container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 mt-12'>

                <div className='md:col-span-3'>
                    <div className='border border-gray-200 p-3 '>


                        <p className='border-b border-gray-200 pb-3 mb-4 font-semibold text-lg'>Category</p>
                        {
                            categorys.map(category => (
                                <div  className='flex gap-2 items-center mb-2'>
                                    <input
                                        type="checkbox"/>
                                    <p onClick ={()=> handleClick(category.id)} className='cursor-pointer'>{category.name}</p>
                                </div>
                            ))
                        }


                        <div className='mt-12'>
                            <p className='border-b border-gray-200 pb-3 mb-4 font-semibold text-lg'>Width</p>
                            {
                                [...new Set(products.map(p => p.width))].map(p => (
                                    <div  className='flex gap-2 items-center mb-2'>
                                        <input type="checkbox"/>
                                        <p onClick={() => handleClickIdth(p)}
                                            className='cursor-pointer '
                                         >{p}</p>
                                    </div>
                                ))
                            }
                        </div>


                        {(Id || width) && (
                            <button
                                onClick={clearFilter}
                                className='mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full transition-all'
                            >
                                Clear Filters
                            </button>
                        )}
                    </div>
                </div>


                <div className='md:col-span-9'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {filterData.length > 0 ? (
                            filterData.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <p className='col-span-1 sm:col-span-2 lg:col-span-4 text-center text-gray-500 mt-10'>No products found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopNow;