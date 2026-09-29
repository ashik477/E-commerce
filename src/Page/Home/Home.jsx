
import Hero from "./HomeComponents/Hero";
import HomeCategory from "./HomeComponents/HomeCategory";
import LatestExclusive from "./HomeComponents/LatestExclusive";
import NewProducts from "./HomeComponents/NewProducts";
import PopularProducts from "./HomeComponents/PopularProducts/PopularProducts";
import Collection from "./HomeComponents/Collection";
import Support from "./HomeComponents/Support";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomeCategory></HomeCategory>
            <PopularProducts></PopularProducts>
            <LatestExclusive></LatestExclusive>
            <NewProducts></NewProducts>      
            <Collection></Collection>
            <Support></Support>
        </div>
    );
};

export default Home;