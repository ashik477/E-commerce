import useData from "../../../Hooks/useData";

const HomeCategory = () => {
    const {categorys} = useData()
     return (
        <div className='container mx-auto px-24'>
            <div className='flex justify-center gap-8'>
                {categorys.map (category=>(
                  <div className='flex flex-col items-center text-center bg-gray-100 rounded-md px-12 py-4'>
                    <img className='w-12 h-12 mb-3 ' src={category.image} alt="" />
                    <p className='text-gray-600'>{category.name}</p>
                    <p className='text-xs text-gray-400'>{category.items} Items</p>
                  </div>  
                ))}
            </div>
        </div>
    );
};

export default HomeCategory;