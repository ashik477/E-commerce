
import { Outlet} from 'react-router';
import Header from '../Components/Sharedcomponents/Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <footer></footer>
        </div>
    );
};

export default Root;