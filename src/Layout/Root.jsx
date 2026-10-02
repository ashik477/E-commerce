
import { Outlet} from 'react-router';
import Header from '../Components/Sharedcomponents/Header/Header';
import Footer from '../Components/Sharedcomponents/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        
    );
};

export default Root;