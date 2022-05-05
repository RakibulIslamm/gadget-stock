import BrandSection from '../BrandSection/BrandSection';
import useAuth from '../../hooks/useAuth';
import NewsLetter from '../../NewsLetter/NewsLetter';
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
            <BrandSection />
            <NewsLetter />
        </div>
    );
};

export default Home;