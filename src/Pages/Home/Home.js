import useAuth from '../../hooks/useAuth';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';

const Home = () => {
    const { user, isLoading } = useAuth();

    // console.log(user);



    if (isLoading) {
        console.log('Loading...');
    }

    console.log(alert);

    return (
        <div className=''>
            <Banner />
            <Inventory />
        </div>
    );
};

export default Home;